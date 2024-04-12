const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
    items: {
        type: Array,
        required: true,
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

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
