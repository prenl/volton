const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category_id: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    voltage: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    old_price: {
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

const Battery = mongoose.model("Battery", batterySchema);

module.exports = Battery;
