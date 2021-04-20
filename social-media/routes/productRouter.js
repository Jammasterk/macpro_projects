const express = require('express')
const app = express()
const productRouter = express.Router()
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Product = require('../models/productSchema')



productRouter.get("/", (req, res, next) => {
    Product.find((err, products) => {
        if(err){
            res.status(500)
            return next(new Error("Cannot retrieve product information"))
        }
        return res.status(200).send(products)
    })
})

productRouter.post("/", upload.single("image"), async (req, res, next) => {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
       const newProduct = new Product(
        {
             productName: req.body.productName,
             productDetails: req.body.productDetails,
             productPrice: req.body.productPrice,
             discount: req.body.discount,
             avatar: result.secure_url,
             cloudinary_id: result.public_id,
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

productRouter.put(
  "/:id",
  upload.single("image"),
  async (req, res, next) => {
      try {
          let user = await Product.findById(req.params.id)
          await cloudinary.uploader.destroy(user.cloudinary_id);
          const result = await cloudinary.uploader.upload(req.file.path);
          const data = {
              productName: req.body.productName || user.productName,
              productPrice: req.body.productPrice || user.productPrice,
              productDetails: req.body.productDetails || user.productDetails,
              discount: req.body.discount || user.discount,
              avatar: result.secure_url.avatar || user.avatar,
              cloudinary_id: result.public_id || user.cloudinary_id
          }
          user = await Product.findByIdAndUpdate(req.params.id, data, {new:true})
          res.json(user)
      } catch (error) {
          console.log(error)
      }
  }
);

productRouter.delete("/:id", upload.single("image"), async(req, res, next) => {
   try {
       let user = await Product.findById(req.params.id);
       await cloudinary.uploader.destroy(user.cloudinary_id)
       await user.remove()
       res.json(user)
   } catch (error) {
       return res.status(200).send(`Successfuly deleted ${user.productName}`)
   }
});

module.exports = productRouter