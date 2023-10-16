const mongoose = require('mongoose');

const { Schema } = mongoose;

const summary = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },  
    summaryText : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Summary', summary)