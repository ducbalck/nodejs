const path= require('path');
const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/product');

router.get('/',productsControllers.getProducts);
module.exports= router;