const mongoose = require('mongoose');

const paymentRequisitionSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    vendor: {
        type: String,
        required: true,
    },
    vendorPhone: {
        type: Number,
        required: true,
    },
    vendorAddress: {
        type: String,
        required: true,
    },
    vendorEmail: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    totalPaidAmount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    });

const paymentRequisitionModel = mongoose.model('paymentRequisitionModel', paymentRequisitionSchema);
module.exports = paymentRequisitionModel;
