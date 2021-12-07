const http = require('http');

const express = require('express');

const app= express();

app.use((req,res,next)=>{
    console.log('In the middlewase');
    next();
});

app.use((req,res,next)=>{
    console.log('In another middlewase');
    
});


const server = http.createServer(app);

server.listen(3000);