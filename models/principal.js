var mongoose = require("mongoose");

var principalSchema = mongoose.Schema({
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
    username : String
});

module.exports = mongoose.model("Principal", principalSchema);