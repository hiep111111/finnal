const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false 
    },
    department:{
        type: String,
        required: true,
    },
    company: {
        type: String,
        default: "CÔNG TY CỔ PHẦN DỊCH VỤ AKC VIỆT NAM",
        required: true,
    },
    position:{
        type: String,
        required: true,
    }
    
},
{
    timestamps: true,
});

const authModel = mongoose.model('authModel', authSchema);
module.exports = authModel;
