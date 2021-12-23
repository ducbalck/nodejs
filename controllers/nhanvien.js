const Nhanvien = require("../model/nhanvien");


exports.getuser = (req, res, next) => {
  res.render("../views/diemdanh.ejs", {
    pageTitle: "điểm danh",
    path: "/diemdanh",
  });
};
exports.getIndex = (req, res, next) => {
  Nhanvien.find()
    .then((nhanviens) => {
      res.render("../views/home.ejs", {
        prods: nhanviens,
        pageTitle: 'Thông tin',
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getAddnv = (req, res, next) => {
  res.render("../views/themnv", {
    pageTitle: "thêm nv",
    path: "/themnv",
    editing: false,
  });
};
exports.AddNhanvien = (req, res, next) => {
  const name = req.body.name;
  const doB = req.body.doB;
  const salaryScale = req.body.salaryScale;
  const startDate = req.body.startDate;
  const department = req.body.department;
  const annualLeave = req.body.annualLeave;
  const Image = req.body.Image;
  const nhanvien = new Nhanvien({
    name: name,
    doB: doB,
    salaryScale: salaryScale,
    startDate: startDate,
    department: department,
    annualLeave: annualLeave,
    Image: Image,
  });
  nhanvien
    .save()
    .then((result) => {
      res.redirect("/themnv");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getNhanviens = (req, res, next) => {
  Nhanvien.find()
    .then((nhanviens) => {
      // console.log(nhanviens);
      res.render('xemthongtin', {
        prods: nhanviens,
        pageTitle: "Thong tin",
        path: "/xemthongtin",
      });
    })
    .catch((err) => console.log(err));
};
exports.getEditNhanvien = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const nvId = req.params.nhanvienId;
  Nhanvien.findById(nvId)
    .then((nhanvien) => {
      
      if (!nhanvien) {
        return res.redirect("/");
      }
      
      res.render("../views/themnv", {
        pageTitle: "Edit Nhanvien",
        path: "/editnv",
        editing: editMode,
        nhanvien: nhanvien,
      });
    })
    .catch((err) => console.log(err));
};
exports.postEditNhanvien = (req, res, next) => {
  const nvId = req.body.nhanvienId;
  const updatedname = req.body.name;
  const updateddoB = req.body.doB;
  const updatedsalaryScale = req.body.salaryScale;
  const updatedstartDate = req.body.startDate;
  const updateddepartment = req.body.department;
  const updatedannualLeave = req.body.annualLeave;
  const updatedImage = req.body.Image;

  Nhanvien.findById(nvId)
    .then((nhanvien) => {
      nhanvien.name = updatedname;
      nhanvien.doB = updateddoB;
      nhanvien.salaryScale = updatedsalaryScale;
      nhanvien.startDate = updatedstartDate;
      nhanvien.department = updateddepartment;
      nhanvien.annualLeave = updatedannualLeave;
      nhanvien.Image = updatedImage;
      return nhanvien.save();
    })
    .then((result) => {
      
      res.redirect("/");
    })
    .catch((err) => console.log(err));
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