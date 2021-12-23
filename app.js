const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();
const nvrouter = require("./routers/nhanvien");

// const usrouter = require("./routers/user");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(nvrouter);
// app.use(usrouter);



mongoose
  .connect(
    "mongodb+srv://minhduc237:mjnhduc237@cluster0.ei7bq.mongodb.net/Nhanvien?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
