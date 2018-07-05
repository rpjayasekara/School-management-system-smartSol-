var mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
    name    : String,
    authent : {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    email   : String,
    phone   : String,
    address : String
});

module.exports = mongoose.model("Admin", adminSchema);