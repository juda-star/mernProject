const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  birthday: {
    type: Date,
  },
  Email: {
    type: String,
    require: true,
  }
});
module.exports = mongoose.model("user", userSchema);
