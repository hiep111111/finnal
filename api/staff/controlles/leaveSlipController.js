const leaveSlipModel = require('../models/leaveSlipModel');

exports.createLeaveSlip = async (req, res) => {
    try {
        const {userName, leaveSlipName, reason, department, company, fromDate, toDate, totalLeaveDays, informationMailList } = req.body;
        const newLeaveSlip = new leaveSlipModel({userName, leaveSlipName, reason,department, company, fromDate, toDate, totalLeaveDays, informationMailList });
        await newLeaveSlip.save();
        res.status(201).json({newLeaveSlip});
    } catch (error) {
        res.status(500).json({ message: 'Failed to create  ', error: error.message });
    }
};

exports.getAllLeaveSlip = async (req, res) => {
    try {
        const leaveSlipList = await leaveSlipModel.find();
        res.status(200).json( leaveSlipList);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve  list', error: error.message });
    }
};

exports.getLeaveSlip = async (req, res) => {
    try {
        const leaveSlip = await leaveSlipModel.findById(req.params.id);
        if (!leaveSlip) {
            return res.status(404).json({ message: '  not found' });
        }
        res.status(200).json({ message: '  found', data: leaveSlip });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve  ', error: error.message });
    }
};

exports.deleteLeaveSlip = async (req, res) => {
    try {
        const leaveSlip = await leaveSlipModel.findByIdAndDelete(req.params.id);
        if (!leaveSlip) {
            return res.status(404).json({ message: '  not found' });
        }
        res.status(200).json({ message: '  deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete  ', error: error.message });
    }
};
