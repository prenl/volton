const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    role: {
        type: Number,
        required: true,
        default: 0,
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

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
