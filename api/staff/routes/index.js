// routes/index.js
const timeSheetRoute = require('./timesheetRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/timeSheet', timeSheetRoute);
};

module.exports = routes;
