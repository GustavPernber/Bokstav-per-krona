const express = require('express')
const router = express.Router()

router.get('/drinksLimited', (req, res)=>{
    console.log('lol')
    res.send(req.query.page)
})

module.exports = router