const mongoose = require('mongoose');
const Category = require('../models/categoryModel')
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        default:"0"
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Category'
    },
    rating:{
        type:String,
        default:"0"
    },
    ratingNumber:{
        type:String,
        default:"0"
    }
})

module.exports = mongoose.model('Product',productSchema);