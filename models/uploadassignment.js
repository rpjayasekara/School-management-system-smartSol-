var mongoose = require("mongoose");

var uploadassignmentSchema = mongoose.Schema({
    name    : String,
    assignmentid: String,
    description : String,
    class : String,
    filename: String,
    index_no: String,
    uploadtime: Date
});

module.exports = mongoose.model("UploadAssignment", uploadassignmentSchema);