const router= require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

// Create
router.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const newProduct= new Product(req.body);
    try{
        const savedProduct= await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})



//Update
router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const updatedProduct= await Product.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new:true}
        );
        res.status(200).json(updatedProduct);
    }catch (err){
        res.status(500).json(err);
    }
});
//delete 
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted!");
    }catch(err){
        res.status(500).json(err);
    }
})

// find product by its id
router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const product= await User.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

//find all product
router.get("/findProducts", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const products= await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports= router;
