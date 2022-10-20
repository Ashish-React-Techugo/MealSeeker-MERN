const express = require('express');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const route=express.Router();

route.post('/create-product',productController.createProduct);
route.get('/products',productController.getProducts)

module.exports=route