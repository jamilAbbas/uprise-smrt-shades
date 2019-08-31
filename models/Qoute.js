const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const QuoteSchema = new Schema({
  userId: {
    type: String
  },
  shade_type: {
    type: String
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
  mount_type: {
    type: String
  },
  control_side: {
    type: String
  },
  header_shade_type: {
    type: String
  },
  header_color: {
    type: String
  },
  fabrics: {
    type: String
  },
  roll_direction: {
    type: String
  },
  motor: {
    type: String
  },
  dc_type: {
    type: String
  },
  single_or_double_shade: {
    type: String
  },
  room_name: {
    type: String
  },
  shade_name: {
    type: String
  }
});

module.exports = User = mongoose.model("quotes", QuoteSchema);