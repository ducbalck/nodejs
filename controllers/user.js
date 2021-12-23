// const User = require("../model/user");

exports.getuser = (req, res, next) => {
  res.render("../views/diemdanh.ejs", {
    pageTitle: "điểm danh",
    path: "/diemdanh",
  });
};

exports.postAddUs = (req, res, next) => {
    const workplace = req.body.workplace; 
    const user = new User({
        workplace: workplace,
        timework:[]   
    });
    user
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

