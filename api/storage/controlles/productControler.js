const express = require('express');
const productModel = require('../models/productModel');

const productController = express.Router();

// Route Get
const getAllProductController = async (req, res) => {
    try {
        const payments = await productModel.find();
        return res.status(200).json(payments);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getProductController = async (req, res) => {
    try {
        const { id } = req.params;

        const payment = await productModel.findById(id);

        if (!payment) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(payment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Route POST
const postProductController = async (req, res) => {
    try {
        const {
            productName,
            count,
            supplyer,
            emailOfSupplyer,
            numberOfSupplyer
        } = req.body;

        const existingProduct = await productModel.findOne({ productName });

        if (existingProduct) {
            return res.status(400).send({
                message: 'Product with this name already exists',
            });
        }
        if (!productName ||
            !count ||
            !emailOfSupplyer ||
            !supplyer
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const newPayment = {
            productName,
            count,
            supplyer,
            emailOfSupplyer,
            numberOfSupplyer
        };

        const payment = await productModel.create(newPayment);
        return res.status(201).send(payment);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

const updateProductCountController = async (req, res) => {
    try {
        const { id } = req.params;
        const { count } = req.body;

        if (!count) {
            return res.status(400).send({ message: 'Count is required' });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(id, { count }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route PUT
const putProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            productName,
            count,
            supplier,
            emailOfSupplier,
            numberOfSupplier
        } = req.body;

        const updatedPayment = {
            productName,
            count,
            supplier,
            emailOfSupplier,
            numberOfSupplier
        };

        const payment = await productModel.findByIdAndUpdate(id, updatedPayment, { new: true });

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        return res.status(200).json(payment);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Delete
const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await productModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    deleteProductController,
    getAllProductController,
    getProductController,
    postProductController,
    putProductController,
    updateProductCountController,
};
