const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "User"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
