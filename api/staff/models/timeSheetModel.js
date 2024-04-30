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
        type: Boolean,
        default: false 
    },
    workDuration:{
        type: String,
        required: true,
    },
    workLocation: {
        type: String,
        required: true,
    } 
},
{
    timestamps: true,
});

const timeSheetModel = mongoose.model('timeSheetModel', timeSheetSchema);
module.exports = timeSheetModel;
