const mongoose = require('mongoose');
const { Schema } = mongoose;

const vendorSchema = new Schema({
    company_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        default: null,
    },
    contact_number: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    gst_number: {
        type: String,
        default: null,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    updated_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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

module.exports = mongoose.model('Vendor', vendorSchema);
