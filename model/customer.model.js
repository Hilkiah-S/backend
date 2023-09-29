const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customername: { type: String, required: true },
    phone: { type: String, required: true },
    site: { type: String, required: true, },
    email: { type: String, required: true, },
    approved: { type: Boolean, required: true, },

}, {
    timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' }
})

module.exports = mongoose.model('customer', CustomerSchema); 