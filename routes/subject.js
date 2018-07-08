var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Principal = require("../models/principal");
var Admin = require("../models/admin");
var CourseMaterial = require("../models/courseMaterial");
var fileupload=require('express-fileupload');



router.get("/science/assignment", isLoggedIn, function (req,res) {
    res.render("student/assignment");
});

router.get("/science/assignment/submission", isLoggedIn, function (req,res) {
    res.render("student/submission");
});
router.get("/science/newsForum", isLoggedIn, function (req,res) {
    res.render("student/newsForum");
});
router.get("/science/lectureSlides", isLoggedIn, function (req,res) {
    res.render("student/lectureSlides");
});

router.get("/courseMaterials", isLoggedIn, function (req,res) {
    res.render("teacher/courseMaterials");
});

router.post('/courseMaterials/upload',isLoggedIn,function(req,res){
    console.log(req.files);
    if(!req.files.sampleFile){
        return res.status(400).send('No files were uploaded.');
    }else{
        var sampleFile = req.files.sampleFile;
        CourseMaterial.findOne({fileName:sampleFile.name},function(err,file){
            if(err){
                console.log(err);
            }else{
                if(file==null){
                    var dir='./public/uploads/courseMaterials/'+sampleFile.name;
                    var material=new CourseMaterial();
                    material.fileName=sampleFile.name;
                    material.week = req.body.week;
                    material.save(function(err){
                        if(err){
                            console.log(err);
                        }else{
                            sampleFile.mv(dir, function(err) {
                                if(err){
                                    return res.status(500).send(err);
                                }else{
                                    // req.flash('success','Schemes Uploaded');
                                    res.redirect('/teacher/schemes');
                                }
                            });
                        }
                    });
                }else{
                    /////////////////////////////////////////////////////////////////////////////////////make code to send a message to front end
                    // req.flash('success','File already exists');
                    res.redirect('back');
                }
            }
        });
    }
});


router.get("/:subject", isLoggedIn, function (req,res) {
    res.send(req.params.subject);
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}


module.exports = router;