const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    skill : {
        type : String,
        required : true
    },
    skillLevel : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('skill', skillSchema)