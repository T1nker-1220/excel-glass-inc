// backend/src/models/index.js
const mongoose = require('mongoose');

const glassEtchingSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const GlassEtching = mongoose.model('GlassEtching', glassEtchingSchema);

module.exports = {
    GlassEtching
};