var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var attendenceSchema = new mongoose.Schema({
    username: String,
    date: Date,
    class: String,
    state    : Boolean
});

attendenceSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Attendence", attendenceSchema);