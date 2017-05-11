// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    email: String, 
    password: String,
    created_on : { type : Date, default: Date.now }, 
    admin: Boolean 
}));