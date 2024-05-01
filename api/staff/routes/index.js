// routes/index.js
const timeSheetRoute = require('./timesheetRoute');
const kpiPerStaffRoute = require('./kpiPerStaffRoute');
const leaveSlipRoute = require('./leaveSlipRoute');
const overTimeRoute = require('./overTimeRoute');
const paymentRequisitionRoute = require('./paymentRequisitionRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/timeSheet', timeSheetRoute);
    timeSheet.use('/api/kpi', kpiPerStaffRoute);
    timeSheet.use('/api/leave', leaveSlipRoute);
    timeSheet.use('/api/overTime', overTimeRoute);
    timeSheet.use('/api/paymentRequisition', paymentRequisitionRoute);

};

module.exports = routes;
