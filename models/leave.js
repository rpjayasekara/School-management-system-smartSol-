var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var leaveSchema = new mongoose.Schema({
    username: String,
    startdate: Date,
    enddate: Date,
    reason    : String,
    status: Boolean
});

leaveSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Leave", leaveSchema);