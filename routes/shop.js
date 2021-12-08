const path= require('path');
const rooDir=require('../util/path');
const express = require('express');
const router = express.Router();
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rooDir,'views','shop.html'));    
});
module.exports= router;