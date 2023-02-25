const mongoose = require('mongoose');

var schema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require: true,
        unique:true
    },
    gender:String,
    status:String
})

const UserDB = mongoose.model('userdb',schema);

module.exports= UserDB;