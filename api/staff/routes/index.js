// routes/index.js
const timeSheetRoute = require('./timesheetRoute');
const kpiPerStaffRoute = require('./kpiPerStaffRoute');
const leaveSlipRoute = require('./leaveSlipRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/timeSheet', timeSheetRoute);
    timeSheet.use('/api/kpi', kpiPerStaffRoute);
    timeSheet.use('/api/leave', leaveSlipRoute);

};

module.exports = routes;
