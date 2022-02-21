const express = require('express')
const router = express.Router()
const Product=require('../models/Product')

const mongoose=require('mongoose')
require('dotenv').config()

function validateQueries(query){
    let newQuery={}
    try {
    
        for (let key in query){
            if(Array.isArray(query[key])){
                query[key]=query[key][0]
            }

            query[key]=parseFloat(query[key])
            
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


        if(query.page===undefined || query.page<1 || query.page > 333 || typeof(query.page)!=Number ){
            newQuery["page"]=standard.page
        }else{
            newQuery["page"]=query.page

        }

        newQuery["priceMin"]= query.priceMin<standard.priceMin ? standard.priceMin : query.priceMin
        newQuery["priceMax"]= query.priceMax>standard.priceMax ? standard.priceMax : query.priceMax
        
        newQuery["volumeMin"]= query.volumeMin<standard.volumeMin ? standard.volumeMin : query.volumeMin
        newQuery["volumeMax"]= query.volumeMax>standard.volumeMax ? standard.volumeMax : query.volumeMax
        
        newQuery["alcMin"]= query.alcMin<standard.alcMin ? standard.alcMin : query.alcMin
        newQuery["alcMax"]= query.alcMax>standard.alcMax ? standard.alcMax : query.alcMax
        
        for(key in newQuery){
            if(newQuery[key]===undefined || null){
                newQuery[key]=standard[key]
            }
        }

    
    } catch (error) {
        console.error(error)
        console.log('QUERY VALIDATION ERROR')
        newQuery=standard
    }
    
    
    return newQuery

}

router.get('/productsLimited', async (req, res)=>{
    mongoose.connect(process.env.DB_URI)

    
    const query=validateQueries(req.query)
    console.log(query)

    const limit=2
    const offset=(1*query.page)-1

    const products= await Product.find()
    .skip(offset).limit(limit)

    .where("price").gte(query.priceMin).lte(query.priceMax)
    .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
    .where("volume").gte(query.volumeMin).lte(query.volumeMax)

    res.json(products)
})

router.get('/', (req, res)=>{
    res.send('api index')
})

module.exports = router