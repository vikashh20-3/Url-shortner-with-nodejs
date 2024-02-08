const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: false
    },
    redirectURL: {
        type: String,
        // required: true
    },
    visitHistory: [{
        timestamp: { type: number }
    }],
}, { timestamps: true });


const URL = mongoose.model('url', urlSchema);

module.exports = URL