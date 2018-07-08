var mongoose = require("mongoose");

var teacherSchema = mongoose.Schema({
    firstName    : String,
    secondName    : String,
    authent : {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        index_no: String
    },
    email      : String,
    birthDay   : String,
    address    : String,
    username : String,
    class : String,
    grade : String,
    subject : String,
    isClassTeacher : Boolean
});

module.exports = mongoose.model("Teacher", teacherSchema);