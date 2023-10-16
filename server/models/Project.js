const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    projectName : {
        type : String,
        required : true
    },
    projectDescription : {
        type : String,
        required : true
    },
    link : {
        type : String,
        // required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        // required : true
    }
});

module.exports = mongoose.model('project', projectSchema)