const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true,
     },
    count: {
        type: Number,
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
     }
},
{
    timestamps: true,
});

const productModel = mongoose.model('productModel', productSchema);
module.exports = productModel;
