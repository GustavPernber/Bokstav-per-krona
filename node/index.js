const axios=require('axios')
const sqlite3=require('sqlite3')

let config = {
    headers: {
        "Ocp-Apim-Subscription-Key": "cfc702aed3094c86b92d6d4ff7a54c84"
    }
}


//klass funktioner: level1, individual, database


class APItoDB{
    constructor({dbPath, categories}){
        this.dbPath=dbPath
        this.categories=categories
    }

    #level1(params) {
        //main loopen, kör igenom alla items men kallar på single product vid den nivån
    }

    #singleProduct(){
        //Behandlar  vad som ska hända med objektet för en produkt. Kallar på databas
    }

    #writeToDb(){

    }

}

async function forLoop (){

    function tblName(level1){
        let tblName=undefined
        switch (level1) {
            case "Vin":
                tblName="Wine"
                break;
            case "Öl":
                tblName="Beer"
                break;
            // case "Vin":
                
            //     break;
        
        }
        return tblName
    }

    function runDb({table, valueArray}){

        return new Promise((resolve, reject)=>{
            let query=`SELECT * FROM ${table} WHERE id=?`
            let id=valueArray[0]

            db.serialize(() => {
                db.all(query, [id], (err, rows)=>{
                    if (err) {
                        throw err;
                        
                    }
                    else if(rows[0]===undefined){
                        reject()
                    }
                    console.log(rows)
                    query=`INSERT INTO ${table} (id, nameBold) VALUES(?, ?)`
                    
                })

                .run(query, valueArray, (err)=> {
                    if (err) {
                            
                        console.log('INSERTION ERROR')
                        console.log(err)
                        console.log(query, valueArray)
                        reject()
                        
                    }
                    else{
                        resolve()
                    }
            
                });
            });


            // //Check for duplicate
            
            // let id=valueArray[0]

            // let query=`SELECT * FROM ${table} WHERE id=?`
            // db.all(query, [id], (err, rows)=>{
            //     if (err) {
            //         throw err;
                    
            //     }
            //     else if(rows[0]===undefined){
            //         reject()
            //     }
            //     console.log(rows)
                
            // })
             
            // query=`INSERT INTO ${table} (id, nameBold) VALUES(?, ?)`
            // db.run(query, valueArray, (err)=> {
            //     if (err) {
                        
            //         console.log('INSERTION ERROR')
            //         console.log(err)
            //         reject()
                    
            //     }
            //     else{
            //         resolve()
            //     }
        
            // });
        })
    }


    //DB stuff
    let db = new sqlite3.Database('C:/Users/Gustav/Google_Drive/VS_Code/Till_prog/BPK/node/db/db.db', (err) => {
    
        if (err) {
            console.log('DB CONNECTION ERROR')
            console.error(err.message);
        }
        console.log('Connected to the database.');
    
    })

    const categories=[
        // {level1:"Öl",
        // level2:["Ale", "Ljus%20lager"],
        // amount:0
        // },

        {level1:"Vin",
        level2:["Rosé"],
        amount:0
        }
    ]
    
    let  printArr=[]

    let allCollected=false

    const config = {
        headers: {
            "Ocp-Apim-Subscription-Key": "cfc702aed3094c86b92d6d4ff7a54c84"
        }
    }

    let total=0
    //Huvudkategori
    for(let k=0; k<categories.length; k++){
        let categoryObj=categories[k]
        let level1= categoryObj.level1
        
        //Underkategori
        for(let j=0; j<categoryObj.level2.length; j++){
            let level2=categoryObj.level2[j]
            
            //30 produkter
            for(let i=1; allCollected==false; i++){

                //API request
                try {
                    
                    response= await axios.get(`https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=${level1}&categoryLevel2=${level2}&page=${i}`, config)
            
                } catch (error) {
                    console.log('API error:')
                    console.error(error)
        
                }

                if(response.data.products.length>0){
                    
                    total+=response.data.products.length

                    // För varje produkt
                    for (let p = 0; p < response.data.products.length; p++) {
                        const product = response.data.products[p];
                        
                        // console.log(product)

                        let imgUrl=null
                        if (product.images.length>0) {
                            imgUrl=`${product.images[0].imageUrl}_200.png`
                        }

                        const apk=((product.alcoholPercentage*0.01)*product.volume)/product.price

                        //Matchar alla spaces med regex och tar bort dom
                        const bpk= ((`${product.productNameBold} ${product.productNameThin}`).replace(/\s+/g, '').length)/product.price

                        let dbValues={
                            id: parseInt(product.productId),
                            nameBold: product.productNameBold,
                            nameThin:product.productNameThin,
                            cat2:product.categoryLevel2,
                            cat3:product.categoryLevel3,
                            cat4:product.categoryLevel4,
                            usage:product.usage,
                            taste:product.taste,
                            imgUrl:imgUrl,
                            tasteClocks:product.tasteClocks,
                            volume:product.volume,
                            price:product.price,
                            alcPercentage: product.alcoholPercentage,
                            assortmentText: product.assortmentText,
                            //APK, BPK
                            apk:apk,
                            bpk:bpk
                            
                            
                        }
                        console.log(dbValues);
                        // if(dbValues.nameBold==="Morning Bride"){
                        //     console.log(product);
                        // }
                        
                        // let tableName=tblName(level1)
                        // let query=`INSERT INTO ${tableName} (id, nameBold) VALUES(?, ?)`
                        try {
                            
                            await runDb({table:tblName(level1), valueArray:[`$${dbValues.id}`, `$${dbValues.nameBold}`]})
                        } catch (error) {
                            
                        }
                        
   
                    }

                    console.log(`${level1}: ${level2}:`, total)
                }else{
                    allCollected=true
                    printArr.push(`${level1}: ${level2}: ${total}`)
                }
            
            }

            //Dags för nästa 30 i denna underkategori. Allcollected ska då bli false och total 0 
            allCollected=false
            total=0
        }
        console.log(printArr)


    }

    
    
}


forLoop()
