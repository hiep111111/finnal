const mongoose = require('mongoose');

const kpiPerStaffSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
     },
    employeeCode:{
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    kpiMonth: {
        type: Number,
        required: true,
    },
    fileData: {
        data: Buffer,  
        contentType: {
            type: String,
            default: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // Loại nội dung của tệp Excel
        }
    }
},
{
    timestamps: true,
});

const kpiPerStaffModel = mongoose.model('kpiPerStaffModel', kpiPerStaffSchema);
module.exports = kpiPerStaffModel;
