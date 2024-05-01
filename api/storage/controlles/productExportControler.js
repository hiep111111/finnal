const express = require('express')
const paymentRequisitionModel = require('../models/paymentRequisitionModel');

const paymentRequisitionControler = express.Router();

// Route Get
const getAllPaymentRequisitionControler = async (req, res) => {
    try {
        const payMent = await paymentRequisitionModel.find();
        return res.status(200).json(payMent);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getPaymentRequisitionControler = async (req, res) => {
    try {
        const { id } = req.params;

        const payMent = await paymentRequisitionModel.findById(id);

        if (!overTime) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(payMent);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const postPaymentRequisitionControler = async (req, res) => {
    try {
        const { 
            userName, 
            department, 
            company, 
            paymentMethod, 
            currency, 
            vendor, 
            vendorPhone, 
            vendorAddress, 
            vendorEmail, 
            amount, 
            totalPaidAmount, 
            description 
        } = req.body;

        if (!userName ||
            !department ||
            !company ||
            !paymentMethod
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        
        // // Kiểm tra tính hợp lệ của số điện thoại
        // if (isNaN(vendorPhone) || vendorPhone.toString().length !== 10) {
        //     return res.status(400).send({
        //         message: 'Invalid phone number',
        //     });
        // }

        // // Kiểm tra tính hợp lệ của số tiền và tổng số tiền đã thanh toán
        // if (isNaN(amount) || amount <= 0 || isNaN(totalPaidAmount) || totalPaidAmount < 0) {
        //     return res.status(400).send({
        //         message: 'Invalid amount or total paid amount',
        //     });
        // }

        // // Kiểm tra tính hợp lệ của địa chỉ email nhà cung cấp
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(vendorEmail)) {
        //     return res.status(400).send({
        //         message: 'Invalid vendor email',
        //     });
        // }

        const newPayment = {
            userName, 
            department, 
            company, 
            paymentMethod, 
            currency, 
            vendor, 
            vendorPhone, 
            vendorAddress, 
            vendorEmail, 
            amount, 
            totalPaidAmount, 
            description 
        };

 
        const payment = await paymentRequisitionModel.create(newPayment);
        return res.status(201).send(payment);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};


// Route Delete
const deletePaymentRequisitionControler = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await paymentRequisitionModel.findByIdAndDelete(id);

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
    deletePaymentRequisitionControler,
    getAllPaymentRequisitionControler,
    getPaymentRequisitionControler,
    postPaymentRequisitionControler,

};
