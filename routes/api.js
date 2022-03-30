const express = require('express')
const router = express.Router()
const Product=require('../models/Product')

const mongoose=require('mongoose')
const { where } = require('../models/Product')
require('dotenv').config()

function validateQueries(query){
    let newQuery={}
    try {
    
        for (let key in query){
            if(["showOrderStock", "sortBy", "cat1"].includes(key)===false){

                if(Array.isArray(query[key])){
                    query[key]=query[key][0]
                }
    
                query[key]=parseFloat(query[key])
            }
            
        }


        const standard={
            
            page: 1,

            priceMin: 0,
            priceMax: 400000,

            volumeMin: 0,
            volumeMax: 40000,

            alcMin: 0,
            alcMax: 90,
            sortBy:{"bpk":-1},
            cat1:{}
        }

        if(query.page===undefined || query.page<1 || query.page > 333 || typeof(query.page)!= "number" ){
            newQuery["page"]=standard.page
        }else{
            newQuery["page"]=query.page
        }

        ["price", "volume", "alc"].forEach((filterName)=>{
            newQuery[`${filterName}Min`]= query[`${filterName}Min`]<standard[`${filterName}Min`] ? standard[`${filterName}Min`] : query[`${filterName}Min`]
            newQuery[`${filterName}Max`]= query[`${filterName}Max`]>standard[`${filterName}Max`] ? standard[`${filterName}Max`] : query[`${filterName}Max`]
        })
        
        if (query.showOrderStock==='false') {
            newQuery["showOrderStock"]=false
        } else {
            newQuery["showOrderStock"]=true  
        }

        // ["apk", "priceAsc", "alcAsc"]
        if (query.sortBy==="apk") {
            newQuery["sortBy"]={"bpk": -1}

        } else if(query.sortBy==="priceAsc"){
            newQuery["sortBy"]={"price": 1}
            
        }else if(query.sortBy==="alcAsc"){
            newQuery["sortBy"]={"alcPercentage": -1}

        }else{
            newQuery["sortBy"]=standard.sortBy
        }

        if(query.cat1==="vin"){
            newQuery["cat1"]={cat1:"Vin"}
            
        }else if(query.cat1==="öl"){
            newQuery["cat1"]={cat1:"Öl"}
            
        }else if(query.cat1==="cider"){
            newQuery["cat1"]={cat1:"Cider%20%26%20blanddrycker"}
            
        }else if(query.cat1==="sprit"){
            newQuery["cat1"]={cat1:"Sprit"}

        }else{
            newQuery["cat1"]=standard.cat1
        }

        for(key in newQuery){
            if(newQuery[key]===undefined || null){
                newQuery[key]=standard[key]
            }
        }

        

    } catch (error) {
        console.error(error)
        console.log('QUERY VALIDATION ERROR')
        return [false, error]
    }
    
    
    return newQuery

}

router.get('/productsLimited', async (req, res)=>{
    // res.json([])
    // return
    mongoose.connect(process.env.DB_URI)
    // console.log(req.query)
    const query=validateQueries(req.query)
    // console.log(query)

    
    if(query[0]===false){
        res.send(false)
        return
    }

    const limit=30
    const offset=(limit*query.page)-limit





    let products
    if (query.showOrderStock) {
        // let var1="cat1"
        //Ordervaror ska visas
        products= await Product.find(query.cat1)
        .skip(offset).limit(limit)

        .where("price").gte(query.priceMin).lte(query.priceMax)
        .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
        .where("volume").gte(query.volumeMin).lte(query.volumeMax)
        // .where('cat1').equals("")
        .sort(query.sortBy)
    } else {
        products= await Product.find(query.cat1)
        .skip(offset).limit(limit)
        
        .where("price").gte(query.priceMin).lte(query.priceMax)
        .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
        .where("volume").gte(query.volumeMin).lte(query.volumeMax)
        .where("assortmentText").ne("Ordervaror")
        .sort(query.sortBy)
    }

    // .where("assortmentText").ne("Ordervara")

    res.json(products)
})

router.get('/', (req, res)=>{
    res.send('api index')
})

module.exports = router