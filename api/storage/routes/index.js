// routes/index.js
const timeSheetRoute = require('./productExportRoute');
const paymentRequisitionRoute = require('./productImportRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/storage/timeSheet', timeSheetRoute);
    timeSheet.use('/api/storage/paymentRequisition', paymentRequisitionRoute);

};

module.exports = routes;
