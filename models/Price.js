const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const PriceSchema = new Schema({
  fabrics: {
    avila: {
      type: Number
    },
    deco: {
      type: Number
    }
  },
  shade: {
    manual: {
      type: Number
    },
    motor: {
      type: Number
    }
  },
  type: {
    single: {
      type: Number
    },
    duel: {
      type: Number
    }
  },
  motorType: {
    hardwire: {
      type: Number
    },
    lilon: {
      type: Number
    }
  },
  dimension: {
    perSquare: {
      type: Number
    }
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = Price = mongoose.model("prices", PriceSchema);
