const express = require('express')
const timeSheetModel = require('../models/timeSheetModel')

const timeSheetController = express.Router();

// Route Get
const gettimeSheetController = async (req, res) => {
    try {
        const timeSheet = await timeSheetModel.find();
        return res.status(200).json(timeSheet);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const gettimeSheetByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const timeSheet = await timeSheetModel.findById(id);

        if (!timeSheet) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(timeSheet);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Create
const postTimeSheetController = async (req, res) => {
    try {
        const { timesheetCode, timesheetName, createdByUserName, state, workDuration, workLocation } = req.body;
        if (!timesheetCode ||
            !timesheetName ||
            !createdByUserName ||
            !workDuration 
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const newTimeSheet = {
            timesheetCode,
            timesheetName ,
            createdByUserName ,
            state ,
            workDuration ,
            workLocation,
        };

        const timeSheet = await timeSheetModel.create(newTimeSheet);
        return res.status(201).send(timeSheet);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};


// Route Delete
const deletetimeSheetController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await timeSheetModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Timesheet not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    deletetimeSheetController,
    gettimeSheetByIdController,
    gettimeSheetController,
    postTimeSheetController,

};
