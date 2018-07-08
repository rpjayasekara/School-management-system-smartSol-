var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
    firstName    : String,
    secondName    : String,
    authent : {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    email      : String,
    birthDay   : String,
    address    : String,
    username : String,
    class : {
         id: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Class"
           }
       },
});

module.exports = mongoose.model("Student", studentSchema);