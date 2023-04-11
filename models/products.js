const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true,
    }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;