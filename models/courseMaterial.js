var mongoose = require("mongoose");

var courseMaterialScehma = mongoose.Schema({
    week    : {
        type:String,
        required:true
    },
    fileName    : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("CourseMaterials", courseMaterialScehma);