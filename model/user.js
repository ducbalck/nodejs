const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  workplace: {
    type: String,
    required: true,
  },
  
  timework: [{
        starttime: { type: Date.now(), required: true },
        endtime: { type: Date.now(), required: true }
      }]
   
});
module.exports = mongoose.model("User", userSchema);
