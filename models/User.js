const mongoose = require("mongoose");

var UserSchema= new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true});



module.exports= mongoose.model("User", UserSchema);
