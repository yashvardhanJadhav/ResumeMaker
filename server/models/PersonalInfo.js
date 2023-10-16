const mongoose = require('mongoose');

const { Schema } = mongoose;

const personalInfoSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    zipCode : {
        type : String,
        // required : true
    },
    email : {
        type : String,
        required : true
    },
    linkedin: {
        type : String, 
        // required : true
    },
    github:{
        type : String,
        // required : true
    },
    personalWebsite : {
        type : String,
        // required : true
    },
    phone : {
        type : String,
        // required : true
    },
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema)