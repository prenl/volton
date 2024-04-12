const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    user_id: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: null,
    },
    battery_id: {
        type: Number,
        required: false,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
