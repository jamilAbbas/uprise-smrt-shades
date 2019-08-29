const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const QuoteSchema = new Schema({
  userId: {
    type: String
  },
  shadeType: {
    type: String
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
  mountType: {
    type: String
  },
  controlSide: {
    type: String
  },
  headerShadeType: {
    type: String
  },
  fabrics: {
    type: String
  },
  roleDirection: {
    type: String
  },
  motor: {
    type: String
  },
  dcType: {
    type: String
  }
});

module.exports = User = mongoose.model("quotes", QuoteSchema);