const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router= require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        const updatedUser= await User.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new:true}
        );
        res.status(200).json(updatedUser);
    }catch (err){
        res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted!");
    }catch(err){
        res.status(500).json(err);
    }
})

//find user by his id
router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all users only when Admin
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const users= await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports= router;