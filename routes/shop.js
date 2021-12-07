const path= require('path');
const rooDir=require('../util/path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rooDir,'views','shop.html'));    
});
module.exports= router;