const mongoose = require("mongoose");

var ProductSchema= new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String},
    category: {type: Array},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
    
},{timestamps:true});



module.exports= mongoose.model("Product", ProductSchema);