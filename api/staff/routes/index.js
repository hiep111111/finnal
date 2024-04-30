// routes/index.js
const timeSheetRoute = require('./timesheetRoute');
const kpiPerStaffRoute = require('./kpiPerStaffRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/timeSheet', timeSheetRoute);
    timeSheet.use('/api/kpi', kpiPerStaffRoute);

};

module.exports = routes;
