// routes/index.js
const timeSheetRoute = require('./timesheetRoute');
const kpiPerStaffRoute = require('./kpiPerStaffRoute');
const leaveSlipRoute = require('./leaveSlipRoute');
const overTimeRoute = require('./overTimeRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/timeSheet', timeSheetRoute);
    timeSheet.use('/api/kpi', kpiPerStaffRoute);
    timeSheet.use('/api/leave', leaveSlipRoute);
    timeSheet.use('/api/overTime', overTimeRoute);

};

module.exports = routes;
