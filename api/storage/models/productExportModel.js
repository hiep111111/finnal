const mongoose = require('mongoose');

const productExportSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    requester: {
        type: String,
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
        default: "Chờ duyệt"
    }
},
    {
        timestamps: true,
    });

const productExportModel = mongoose.model('productExportModel', productExportSchema);
module.exports = productExportModel;
