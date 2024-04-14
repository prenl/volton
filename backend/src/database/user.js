const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false,
        default: null,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        default: null,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    hashed_password: {
        type: String,
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

const User = mongoose.model("User", userSchema);

module.exports = User;
