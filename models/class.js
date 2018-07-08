var mongoose = require("mongoose");

var classSchema = mongoose.Schema({
    name    : String,
    grade    : String,
    classTeacher : {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher"
        }
    },
    noOfStudents : Number,
    teachers : [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher"
            }
        }
    ]
});

module.exports = mongoose.model("Class", classSchema);