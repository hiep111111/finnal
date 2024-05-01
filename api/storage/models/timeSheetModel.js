const mongoose = require('mongoose');

const timeSheetSchema = mongoose.Schema({
    timesheetCode:{
        type: String,
        required: true,
        unique: true
    },
    timesheetName	:{
        type: String,
        required: true,
    },
    createdByUserName: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        default: "Đã vào làm"
    },
    workDuration:{
        type: String,
        required: true,
    },
    workLocation: {
        type: String,
        default: "Tại văn phòng"
    } 
},
{
    timestamps: true,
});

const timeSheetModel = mongoose.model('timeSheetModel', timeSheetSchema);
module.exports = timeSheetModel;
