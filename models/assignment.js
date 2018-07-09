var mongoose = require("mongoose");

var Integer;
var assignmentSchema = mongoose.Schema({
    name    : String,
    description : String,
    subject : String,
    class : String,
    grade : String,
    filename: String,
    duedate: Date,
    teacher: String
});

module.exports = mongoose.model("Assignment", assignmentSchema);