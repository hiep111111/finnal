const mongoose = require('mongoose');

const productImportSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    requester: {
        type: String,
        required: true,
    },
    supplyer:{
        type: String,
        required: true,
    },
    emailOfSupplyer: {
        type: String,
        required: true,
    },
    numberOfSupplyer: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    toltalPrice: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        default: 'Chờ duyệt'
    }
},
    {
        timestamps: true,
    });

const productImportModel = mongoose.model('productImportModel', productImportSchema);
module.exports = productImportModel;
