const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuoteDetailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    quote_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    territory: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = QuoteDetail = mongoose.model("quoteDetails", QuoteDetailSchema);
