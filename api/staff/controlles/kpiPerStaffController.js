const kpiPerStaffModel = require('../models/kpiPerStaffModel');

exports.createKpiPerStaff = async (req, res) => {
    try {
        const { userName, employeeCode, Title, email, department, kpiMonth, fileData } = req.body;
        const newKpiPerStaff = new kpiPerStaffModel({ userName, employeeCode, Title, email, department, kpiMonth, fileData });
        await newKpiPerStaff.save();
        res.status(201).json({ message: 'KPI per staff created successfully', data: newKpiPerStaff });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create KPI per staff', error: error.message });
    }
};

exports.getAllKpiPerStaff = async (req, res) => {
    try {
        const kpiPerStaffList = await kpiPerStaffModel.find();
        res.status(200).json( kpiPerStaffList);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve KPI per staff list', error: error.message });
    }
};

exports.getKpiPerStaff = async (req, res) => {
    try {
        const kpiPerStaff = await kpiPerStaffModel.findById(req.params.id);
        if (!kpiPerStaff) {
            return res.status(404).json({ message: 'KPI per staff not found' });
        }
        res.status(200).json({ message: 'KPI per staff found', data: kpiPerStaff });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve KPI per staff', error: error.message });
    }
};

exports.deleteKpiPerStaff = async (req, res) => {
    try {
        const kpiPerStaff = await kpiPerStaffModel.findByIdAndDelete(req.params.id);
        if (!kpiPerStaff) {
            return res.status(404).json({ message: 'KPI per staff not found' });
        }
        res.status(200).json({ message: 'KPI per staff deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete KPI per staff', error: error.message });
    }
};
