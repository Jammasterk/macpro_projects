const express = require('express')
const app = express()
const productRouter = express.Router()
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Product = require('../models/productSchema')


productRouter.get("/", (req, res, next) => {

})

productRouter.post("/", upload.single("image"), async (req, res, next) => {
    // Upload image to cloudinary
    req.body.user = req.user._id
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
       const newProduct = new Product( req.body, {
             productName: req.body.productName,
             productDetails: req.body.productDetails,
             productPrice: req.body.productPrice,
             discount: req.body.discount,
             avatar: result.secure_url,
             cloudinary_id: result.public_id,
            user: req.body.user
           });
       // Save user
       await newProduct.save((err, savedProduct) => {
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(savedProduct)
       });
})

module.exports = productRouter