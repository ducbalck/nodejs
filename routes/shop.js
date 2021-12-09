const path= require('path');
const rooDir=require('../util/path');
const express = require('express');
const router = express.Router();
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    const products= adminData.products;
    res.render('shop',{prods:products, pageTitle:'shop',path:'/',activeShop:true,productCSS:true}) ;
});
module.exports= router;