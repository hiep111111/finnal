// routes/index.js
const productExportRoute = require('./productExportRoute');
const productImportRoute = require('./productImportRoute');
const productRoute = require('./productRoute');

const routes = (timeSheet) => {
    timeSheet.use('/api/storage/product', productRoute);
    timeSheet.use('/api/storage/productExportRoute', productExportRoute);
    timeSheet.use('/api/storage/productImportRoute', productImportRoute);

};

module.exports = routes;
