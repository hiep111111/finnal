const express = require('express')
const productExportModel = require('../models/productExportModel');

const productExportControler = express.Router();

// Route Get
const getAllProductImportControler = async (req, res) => {
    try {
        const payMent = await productExportModel.find();
        return res.status(200).json(payMent);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getProductImportControler = async (req, res) => {
    try {
        const { id } = req.params;

        const payMent = await productExportModel.findById(id);

        if (!overTime) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(payMent);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const postProductImportControler = async (req, res) => {
    try {
        const {
            productName,
            requester,
            supplyer,
            emailOfSupplyer,
            numberOfSupplyer,
            count,
            unitPrice,
            toltalPrice,
            state
        } = req.body;

        if (!productName ||
            !requester ||
            !supplyer ||
            !emailOfSupplyer ||
            !numberOfSupplyer
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const existingProduct = await productExportModel.findOne({ productName });

        // Nếu tồn tại productName đã tồn tại, trả về lỗi
        if (existingProduct) {
            return res.status(400).send({
                message: 'Product name already exists',
            });
        }
        const newPayment = {
            productName,
            requester,
            supplyer,
            emailOfSupplyer,
            numberOfSupplyer,
            count,
            unitPrice,
            toltalPrice,
            state
        };


        const payment = await productExportModel.create(newPayment);
        return res.status(201).send(payment);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};


// Route Delete
const deleteProductImportControler = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await productExportModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: '  not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    deleteProductImportControler,
    getAllProductImportControler,
    getProductImportControler,
    postProductImportControler,

};
