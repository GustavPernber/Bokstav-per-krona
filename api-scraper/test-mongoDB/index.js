// const data = {
//     id: parseInt(product.productId),
//     nameBold: product.productNameBold,
//     nameThin: product.productNameThin,
//     cat1:this.level1,
//     cat2: product.categoryLevel2,
//     cat3: product.categoryLevel3,
//     cat4: product.categoryLevel4,
//     usage: product.usage,
//     taste: product.taste,
//     tasteClocks: tasteClocks,
//     volume: product.volume,
//     price: product.price,
//     alcPercentage: product.alcoholPercentage,
//     assortmentText: product.assortmentText,
//     apk: apk,
//     bpk: bpk,
//     vintage:product.vintage,
//     productNumber:product.productNumber
// };


const mongoose=require('mongoose')
require('dotenv').config()
const uri=process.env.DB_URI

const Product=require('./models/product')

const data = {
    id: 1234,
    nameBold: "Epic dryck",
    nameThin: "Thin title",
    cat1:"Vin",
    cat2: "Vitt",
    cat3: "Friskt och fruktigt",
    cat4: null,
    usage: "Hur man använder den",
    taste: "smakar bajs",
    tasteClocks: "kloaka1=90",
    volume: 750,
    price: 21,
    alcPercentage: 12,
    assortmentText: "Ordervara",
    apk: 0.9783,
    bpk: 0.831,
    vintage:null,
    productNumber:9801
};

mongoose.connect(uri)

async function run(){
    try {
        
        const product=await Product.create(data)
    } catch (error) {
        console.log(error.code)
        throw error
    }
    console.log('saved')
}
run()


