    const mongoose = require('mongoose');

    const { Schema } = mongoose;

    const education = new Schema({
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user'
        },  
        schoolName : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        degree : {
            type : String,
            required : true
        },
        fieldOfStudy : {
            type : String,
            required : true 
        },
        score : {
            type : String,
            required : true 
        },
        state :{
            type : String,
            required : true
        },
        graduationDate : {  
            type : Date,
            required : true
        }
    });

    module.exports = mongoose.model('Education', education)