var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Principal = require("../models/principal");
var Admin = require("../models/admin");

router.get("/new", isLoggedIn, function (req,res) {
    res.render("admin/createUser");
});

router.post("/", isLoggedIn, function (req,res) {
    // res.send(req.body);
    var newUser = new User({username:req.body.index, type:req.body.type});
    User.register(newUser,"password",function (err,user) {
        if(err){
            console.log(err);
            return res.redirect("users/new");
        }else {
            if(req.body.type==="Student"){
                console.log("Hey!!!!");
                var newStudent = new Student({
                    firstName:req.body.firstName,
                    secondName:req.body.secondName,
                    birthday:req.body.date,
                    address:req.body.address
                })
                Student.create(newStudent,function (err,student) {
                    if(err){
                        console.log(err);
                    }else {
                        student.authent.id=user._id;
                        student.authent.username=user.username;
                        student.username=user.username;
                        student.save();
                        console.log("Student created!!!");
                        console.log(student);
                        res.redirect("users/new");
                    }
                })

            }else if(req.body.type==="Teacher"){
                var newTeacher = new Teacher({
                    firstName:req.body.firstName,
                    secondName:req.body.secondName,
                    birthday:req.body.date,
                    address:req.body.address
                })
                Teacher.create(newTeacher,function (err,teacher) {
                    if(err){
                        console.log(err);
                    }else {
                        teacher.authent.id=user._id;
                        teacher.authent.username=user.username;
                        teacher.username=user.username;
                        teacher.save();
                        console.log("Teacher created!!!");
                        res.redirect("users/new");
                    }
                })
            }else if(req.body.type==="Principal"){
                var newTeacher = new Principal({
                    firstName:req.body.firstName,
                    secondName:req.body.secondName,
                    birthday:req.body.date,
                    address:req.body.address
                })
                Principal.create(newTeacher,function (err,principal) {
                    if(err){
                        console.log(err);
                    }else {
                        principal.authent.id=user._id;
                        principal.authent.username=user.username;
                        principal.username=user.username;
                        principal.save();
                        console.log("Principal created!!!");
                        res.redirect("users/new");
                    }
                })
            }
        }
    })
});

router.get("/students", isLoggedIn, function (req,res) {
    Student.find({},function (err,students) {
        if(err){
            console.log(err);
        }else {
            res.render("admin/students",{students:students});
        }
    })
});

router.get("/teachers", isLoggedIn, function (req,res) {
    Teacher.find({},function (err,teacher) {
        if(err){
            console.log(err);
        }else {
            res.render("admin/teachers",{students:teacher});
        }
    })
});



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}
module.exports = router;