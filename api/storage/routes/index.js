// routes/index.js
const timeSheetRoute = require('./timesheetRoute');
const paymentRequisitionRoute = require('./paymentRequisitionRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/storage/timeSheet', timeSheetRoute);
    timeSheet.use('/api/storage/paymentRequisition', paymentRequisitionRoute);

};

module.exports = routes;
