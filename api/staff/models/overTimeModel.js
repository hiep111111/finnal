const mongoose = require('mongoose');

const overTimeSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
     },
    overtimeName:{
        type: String,
        required: true,
     },
    reason:{
        type: String,
        required: true,
    },
    createdByUserName: {
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
    describe:{
        type: String,
        required: true,
    },
    fromDate: {
        type: Date,
        required: true,
    },
    toDate: {
        type: Date,
        required: true,
    }
},
{
    timestamps: true,
});

const overTimeModel  = mongoose.model('overTimeModel', overTimeSchema);
module.exports = overTimeModel ;
