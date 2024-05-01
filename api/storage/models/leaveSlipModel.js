const mongoose = require('mongoose');

const leaveSlipSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
     },
    leaveSlipName:{
        type: String,
        required: true,
     },
    reason	:{
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    fromDate:{
        type: Date ,
        required: true
    },
    toDate: {
        type: Date ,
        required: true
     },
    totalLeaveDays: {
        type: Number,
        required: true,
    },
    informationMailList:{
        type: String,
        required: true,
    }


},
{
    timestamps: true,
});

const leaveSlipModel = mongoose.model('leaveSlipModel', leaveSlipSchema);
module.exports = leaveSlipModel;
