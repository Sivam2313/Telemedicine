const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    user:{
        type:String,
    },
    registrationId:{
        type:String,
    },
    name:{
        type:String,
    },
    login:{
        type:Date,
    },
    logout:{
        type:Date,
    },
},{
    timestamp:true,
});

const Log = mongoose.model('Log',logSchema);

module.exports = Log;
