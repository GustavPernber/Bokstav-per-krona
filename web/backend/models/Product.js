const mongoose=require('mongoose')

const ProductSchema= new mongoose.Schema({
    
    productId: {
        type: Number,
        required: true,
        unique:true
    },
    productNumber: {
        type:Number,
        required:true
    },
    nameBold: {
        type: String,
        required:true
    },
    nameThin: {
        type: String,
        required: false
    },
    vintage: {
        type:String,
        required:false
    },
    cat1:{
        type:String,
        required:false
    },
    cat2: {
        type:String,
        required:false
    },
    cat3: {
        type:String,
        required:false
    },
    cat4: {
        type:String,
        required:false
    }, 
    usage: {
        type:String,
        required:false
    },
    taste: {
        type:String,
        required:false
    }, 
    tasteClocks: {
        type:Array,
        
    }, 
    volume: {
        type:Number,
        required:false
    },
    price: {
        type:Number,
        required:false
    },
    alcPercentage: {
        type:Number,
        required:false
    }, 
    assortmentText: {
        type:String,
        required:false
    }, 
    apk: {
        type:Number,
        required:false
    }, 
    bpk: {
        type:Number,
        required:false
    },
    
})

module.exports=mongoose.model('Product', ProductSchema)