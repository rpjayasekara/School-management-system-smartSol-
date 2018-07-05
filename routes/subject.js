var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Principal = require("../models/principal");
var Admin = require("../models/admin");

router.get("/science", isLoggedIn, function (req,res) {
    res.render("student/subject");
});

router.get("/science/assignment", isLoggedIn, function (req,res) {
    res.render("student/assignment");
});

router.get("/science/assignment/submission", isLoggedIn, function (req,res) {
    res.render("student/submission");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}
module.exports = router;