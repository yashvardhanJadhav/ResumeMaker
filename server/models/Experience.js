const mongoose = require('mongoose');

const { Schema } = mongoose;

const experience = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },  
    employer : {
        type : String,
        required : true
    },
    jobTitle : {
        type : String,
        required : true
    },
    jobDescription : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
    }
});

module.exports = mongoose.model('Experience', experience)