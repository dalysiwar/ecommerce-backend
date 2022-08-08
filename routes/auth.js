const router= require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");


//Register yal khou
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch (err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong data !");
        user.password !== req.body.password && res.status(401).json("Wrong data !");

        const accessToken= jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC);


        res.status(200).json({user, accessToken});
    }catch (err){
        res.status(500).json(err);
    }
})





module.exports= router;