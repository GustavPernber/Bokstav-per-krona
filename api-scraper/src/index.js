const axios = require("axios");
const sqlite3 = require("sqlite3");


class APItoDB {
    constructor({ dbPath, categories }) {
        this.dbPath = dbPath;
        this.categories = categories;

        this.amountList = {};
        this.config = {
            headers: {
                "Ocp-Apim-Subscription-Key": "cfc702aed3094c86b92d6d4ff7a54c84",
            },
        };

        this.db = new sqlite3.Database(this.dbPath, (err) => {
            if (err) {
                console.log("DB CONNECTION ERROR");
                console.error(err.message);
                throw new Error();
            } else {
                console.log("Connected to the database.");
            }
        });
    }

    async init() {
        await this.#level1();
        console.log("Completed");
    }

    //Behandlar alla level1, alltså allt
    async #level1() {
        //LEVEL1
        for (let k = 0; k < this.categories.length; k++) {
            //Loopar igenom alla huvudkategorier
            let categoryObj = this.categories[k];
            this.level1 = categoryObj.level1;
            let level1 = this.level1;
            console.log("Lvl1: ", level1);

            // LEVEL2 går igenom alla level2
            for (let j = 0; j < categoryObj.level2.length; j++) {
                let level2 = categoryObj.level2[j];
                console.log("Lvl2: ", level2);
                this.level2 = level2;

                await this.#getPages(level1, level2);
            }
        }
        console.log(this.amountList);
    }

    //Behandlar alla pages för tillhörande level2
    #getPages(level1, level2) {
        this.keyString = `${this.level1} -> ${this.level2}`;
        this.amountList[this.keyString] = 0;
        //Går igenom alla tillgängliga pages. För en page skickas det till singePage som behandlar ett objekt
        //Resolve när alla pages är uppnådda och behandlade för den level2

        console.log("Getting pages...");
        return new Promise(async (resolve, reject) => {
            let maxPages = false;
            let totalProducts = 0;
            let response = undefined;

            for (let i = 1; maxPages === false; i++) {
                try {
                    response = await axios.get(
                        `https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=${level1}&categoryLevel2=${level2}&page=${i}`,
                        this.config
                    );
                } catch (error) {
                    console.log("API error:");
                    console.error(error);
                    reject();
                }

                if (response.data.products.length < 1) {
                    console.log("All pages completed for:", level1, level2);
                    maxPages = true;
                    resolve();
                } else {
                    totalProducts += response.data.products.length;
                    await this.#singlePage(response.data.products);
                }
            }
        });
    }

    //Behandlar en page. Ca30 produkter
    #singlePage(products) {
        //Har en lista med objekt. 30objekt vanligtvis
        return new Promise(async (resolve, reject) => {
            for (let i = 1; i < products.length; i++) {
                //För varje produkt:
                let product = products[i];
              
                await this.#writeToDb(product);
            }

            console.log("Resolved single page. Fetching new from API...");
            resolve();
        });
    }

    //Tar in en produkt objekt och skriver den till databasen om den inte redan finns
    #writeToDb(product) {
        //Skriver till databasen om objektet ej redan finns

        return new Promise(async (resolve, reject) => {
            let imgUrl = null;
            if (product.images.length > 0) {
                imgUrl = `${product.images[0].imageUrl}_200.png`;
            }

            const apk = (product.alcoholPercentage * 0.01 * product.volume) / product.price;
            const bpk = `${product.productNameBold} ${product.productNameThin}`.replace(/\s+/g, "").length / product.price;

            let tasteClocks = "";
            for (let i = 0; i < product.tasteClocks.length; i++) {
                tasteClocks += `${product.tasteClocks[i].key}:${product.tasteClocks[i].value}, `;
            }

            const data = {
                id: parseInt(product.productId),
                nameBold: product.productNameBold,
                nameThin: product.productNameThin,
                cat1:this.level1,
                cat2: product.categoryLevel2,
                cat3: product.categoryLevel3,
                cat4: product.categoryLevel4,
                usage: product.usage,
                taste: product.taste,
                tasteClocks: tasteClocks,
                volume: product.volume,
                price: product.price,
                alcPercentage: product.alcoholPercentage,
                assortmentText: product.assortmentText,
                apk: apk,
                bpk: bpk,
                vintage:product.vintage,
                productNumber:product.productNumber
            };

            let table = "Products";

 
            let query = `INSERT INTO ${table} (id, productNumber, vintage, nameBold, nameThin, category1, category2, category3, category4, usage, taste, tasteClocks, volume, price, APK, BPK, assortment, alcPercentage) VALUES(?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?,?,?, ?)`;
            let params = [
                data.id,
                data.productNumber,
                data.vintage,
                data.nameBold,
                data.nameThin,
                data.cat1,
                data.cat2,
                data.cat3,
                data.cat4,
                data.usage,
                data.taste,
                data.tasteClocks,
                data.volume,
                data.price,
                data.apk,
                data.bpk,
                data.assortmentText,
                data.alcPercentage
            ];

            try {
                await this.#queryPromise(query, params);
                this.amountList[this.keyString] += 1;
            } catch (error) {
                if(error.errno===19){ //Unique constraint failed
                    console.log("DUPLICATE DETECTED:", data.id, data.nameBold);

                }else{
                    console.log(error)
                    reject()
                }
            }

            console.log(this.amountList);
            resolve();
        });
    }

    //Skickar query med params till SQL Db. Returnerar ett promise så att async/await i funktionen över funkar
    #queryPromise(query, params) {
        return new Promise((resolve, reject) => {
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }
}

const APIScript = new APItoDB({
    dbPath: "C:/Users/Gustav/Google_Drive/VS_Code/Till_prog/BPK-react-branch/api-scraper/db/db.db",

    categories: [
        // { level1: "Öl", level2: ["Ale", "Ljus%20lager"]},
        { level1: "Öl", level2: ["Ale",]},

        // { level1: "Vin", level2: ["Rosé", "Vitt"]},
        // { level1: "Vin", level2: ["Rött"]}
        
        // {level1:"Sprit", level2:["Rom", "Likör"]},

        // {level1:"Cider%20%26%20blanddrycker",level2:["Cider", "Blanddryck"]}
    ],
});

APIScript.init();

// assortmentText: 'Ordervaror',
