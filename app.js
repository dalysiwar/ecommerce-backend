const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute= require("./routes/auth");
const dotenv= require("dotenv");
const userRoute= require("./routes/user");
const productRoute= require("./routes/product");
const cartRoute= require("./routes/cart");
const orderRoute= require("./routes/order");
dotenv.config();

const PORT = 3000;

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DBConnection successfull!"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);


app.listen(PORT,()=>{
    console.log(`Backend server is running on port: http://localhost:${PORT}`);
});