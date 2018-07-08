var mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
    name    : String,
    description : String,
    module : String,
    class : String,
    filename: String,
    duedate: Date
});

module.exports = mongoose.model("Assignment", assignmentSchema);