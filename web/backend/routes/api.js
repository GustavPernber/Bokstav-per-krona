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
            if(key!="showOrderStock"){

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
            alcMax: 90
            
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
    mongoose.connect(process.env.DB_URI)

    const query=validateQueries(req.query)

    if(query[0]===false){
        res.send(false)
        return
    }

    const limit=2
    const offset=(limit*query.page)-limit


    let products
    if (query.showOrderStock) {
        //Ordervaror ska visas
        products= await Product.find()
        .skip(offset).limit(limit)

        .where("price").gte(query.priceMin).lte(query.priceMax)
        .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
        .where("volume").gte(query.volumeMin).lte(query.volumeMax)
    } else {
        products= await Product.find()
        .skip(offset).limit(limit)

        .where("price").gte(query.priceMin).lte(query.priceMax)
        .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
        .where("volume").gte(query.volumeMin).lte(query.volumeMax)
        .where("assortmentText").ne("Ordervara")
    }

    // .where("assortmentText").ne("Ordervara")

    res.json(products)
})

router.get('/', (req, res)=>{
    res.send('api index')
})

module.exports = router