const express = require('express')
const router = express.Router()
const Product=require('../models/Product')

const mongoose=require('mongoose')
require('dotenv').config()

function validateQueries(query){

    const defaults=[
        {page:1},

        {priceMin:0},
        {priceMax:800000},

        {volumeMin:0},
        {volumeMax:40000},

        {alcMin:0},
        {alcMax:90},

    ]

    let newQuery={}
    if(query.page===undefined || query.page<1 || query.page > 333){
        newQuery[page]=defaults.page
    }

    console.log
    defaults.forEach(element => {

        const key=Object.keys(element)
        if (query[key]===undefined){
            newQuery[key]=element[key]
        }else{
            newQuery[key]=parseFloat(query[key])
        }
        // console.log(Object.keys(element))
    });

    return newQuery

}

router.get('/productsLimited', async (req, res)=>{
    mongoose.connect(process.env.DB_URI)

    const query=validateQueries(req.query)
    // console.log(query)

    const limit=2
    const offset=(1*req.query.page)-1

    const products=
    await Product.find()
    .skip(offset).limit(limit)
    .where("price").gte(query.priceMin).lte(query.priceMax)
    .where("alcPercentage").gte(query.alcMin).lte(query.alcMax)
    .where("volume").gte(query.volumeMin).lte(query.volumeMax)

    res.json(products)
})

module.exports = router