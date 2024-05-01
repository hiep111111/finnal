const express = require('express')
const overTimeModel = require('../models/overTimeModel');

const overTimeControler = express.Router();

// Route Get
const getAllOverTimeControler = async (req, res) => {
    try {
        const overTime = await overTimeModel.find();
        return res.status(200).json(overTime);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getOverTimeControler = async (req, res) => {
    try {
        const { id } = req.params;

        const overTime = await overTimeModel.findById(id);

        if (!overTime) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(overTime);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const postOverTimeControler = async (req, res) => {
    try {
        const { userName,overtimeName,email, reason, createdByUserName, department,describe, fromDate, toDate } = req.body;
        if (!overtimeName ||
            !reason ||
            !createdByUserName ||
            !createdByUserName
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newOverTime = {
            userName,
            overtimeName,
            email,
            reason,
            createdByUserName,
            department,
            describe,
            fromDate,
            toDate
        };

        const overTime = await overTimeModel.create(newOverTime);
        return res.status(201).send(overTime);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};


// Route Delete
const deleteOverTimeControler = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await overTimeModel.findByIdAndDelete(id);

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
    deleteOverTimeControler,
    getAllOverTimeControler,
    getOverTimeControler,
    postOverTimeControler,

};
