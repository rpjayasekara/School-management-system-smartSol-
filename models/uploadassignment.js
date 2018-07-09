var mongoose = require("mongoose");

var uploadassignmentSchema = mongoose.Schema({
    assignmentid: String,
    filename: String,
    index_no: String,
    uploadtime: Date,
    marks:Number,
    graded:Boolean
});

module.exports = mongoose.model("UploadAssignment", uploadassignmentSchema);