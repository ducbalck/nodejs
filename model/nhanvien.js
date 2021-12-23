const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nhanvienSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  doB: {
    type: Date,
    required: true
  },
  salaryScale: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true
  }
  ,
  annualLeave: {
    type: Number,
    required: true
  }
  ,
  Image: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'User'
  }
});
module.exports = mongoose.model('Nhannvien',nhanvienSchema)