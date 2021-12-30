const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('61bca44c30537d702b79e031')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err=>{
         console.log(err);
        res.redirect('/');  
      });
      
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
