const express =require('express');
const Router = express.Router();
const nvdata = require('../controllers/nhanvien');


Router.get('/diemdanh',nvdata.getuser);
Router.get('/',nvdata.getIndex);
Router.get('/themnv',nvdata.getAddnv);
Router.post('/themnv',nvdata.AddNhanvien);
Router.get('/xemthongtin',nvdata.getNhanviens);
Router.get('/editnv/:nhanvienId',nvdata.getEditNhanvien);
Router.post('/editnv',nvdata.postEditNhanvien);


  
module.exports = Router;