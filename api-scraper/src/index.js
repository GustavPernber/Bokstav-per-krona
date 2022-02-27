const axios = require("axios");
const mongoose=require('mongoose')
require('dotenv').config()
const Product=require('./models/Product')

class APItoDB {
    constructor({ dbPath, categories }) {
        this.dbPath = dbPath;
        this.categories = categories;

        this.Product=

        this.amountList = {};
        this.config = {
            headers: {
                "Ocp-Apim-Subscription-Key": "cfc702aed3094c86b92d6d4ff7a54c84",
            },
        };

        mongoose.connect(this.dbPath)

    }

    async init() {
        await this.#level1();
        console.log("---COMPLETED---");
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
                    // console.log(`https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=${level1}&categoryLevel2=${level2}&page=${i}`)
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
                    console.log("All pages completed for:", level1,',', level2);
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
        //Har en lista med objekt. 30objekt vanligtvis (förutom vid slutet)
        return new Promise(async (resolve, reject) => {
            for (let i = 0; i < products.length; i++) {
                //För varje produkt:
                let product = products[i];
              
                await this.#writeToDb(product);
            }

            console.log("Resolved single page. Fetching new from API...");
            resolve();
        });
    }

    #writeToDb(product){
        return new Promise(async(resolve, reject)=>{
            let imgUrl = null;
            if (product.images.length > 0) {
                imgUrl = `${product.images[0].imageUrl}_200.png`;
            }

            const apk = (product.alcoholPercentage * 0.01 * product.volume) / product.price;
            const bpk = `${product.productNameBold} ${product.productNameThin}`.replace(/\s+/g, "").length / product.price;

            const data = {
                productId: parseInt(product.productId),
                productNumber: parseInt(product.productNumber),
                nameBold: product.productNameBold,
                nameThin: product.productNameThin,
                vintage:product.vintage,
                cat1:this.level1,
                cat2: product.categoryLevel2,
                cat3: product.categoryLevel3,
                cat4: product.categoryLevel4,
                usage: product.usage,
                taste: product.taste,
                tasteClocks: product.tasteClocks,
                volume: product.volume,
                price: product.price,
                alcPercentage: product.alcoholPercentage,
                assortmentText: product.assortmentText,
                apk: apk,
                bpk: bpk,
            };

            try {
                await Product.create(data)
                this.amountList[this.keyString]+=1
            } catch (error) {
                if(error.code===11000){
                    console.log("DUPLICATE DETECTED:", data.productId, data.nameBold);
                    
                }else{
                    console.log(data)
                    console.log(error)
                    reject()
                }
            }
            

            console.log(this.amountList)
            resolve()
        
        
        })
    }

   
}

const APIScript = new APItoDB({
    dbPath: process.env.DB_URI,

    categories: [
        { level1: "Öl", level2: ["Ale", "Ljus%20lager", "Syrlig%20öl", "Porter%20%26%20Stout", "Mellanmörk%20%26%20Mörk%20lager", "Veteöl", "Annan%20öl"]},

        {level1: "Vin", level2: ["Rött", "Rosé", "Vitt", "Mousserande", "Vinlåda", "Starkvin", "Smaksatt%20vin%20%26%20fruktvin", "Vermouth", "Glögg%20och%20Glühwein", "Sake", "Aperitif"]} ,
      
        {level1:"Sprit", level2:["Whisky", "Rom", "Likör", "Gin%20%26%20Genever", "Akvavit%20%26%20Kryddat%20brännvin", 
        "Cognac", "Vodka%20%26%20Okryddat%20brännvin", "Grappa%20%26%20Marc", "Tequila%20%26%20Mezcal", "Armagnac%20%26%20Brandy","Smaksatt%20sprit",  "Bitter", 
        "Frukt%20%26%20Druvsprit", "Calvados", "Drinkar%20%26%20Cocktails", "Punsch", "Anissprit", "Sprit%20av%20flera%20typer"]},

        {level1:"Cider%20%26%20blanddrycker",level2:["Cider", "Blanddryck"]} 
    ],
});

APIScript.init();

// assortmentText: 'Ordervaror',
