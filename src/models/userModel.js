const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    company_name: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    company_address: {
        type: String,
        default: null,
    },
    gst_number: {
        type: String,
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
    deleted_at: {
        type: Date,
        default: null,
    }
});

module.exports = mongoose.model('User', userSchema);