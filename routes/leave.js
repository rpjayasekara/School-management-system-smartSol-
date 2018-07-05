var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Principal = require("../models/principal");
var Admin = require("../models/admin");

router.get("/apply", isLoggedIn, function (req,res) {
    res.render("teacher/leave");
});

router.get("/submit", isLoggedIn, function (req,res) {
    res.render("teacher/submitted");
});

router.get("/check", isLoggedIn, function (req,res) {
    res.render("principal/leaveList");
});

router.get("/approve", isLoggedIn, function (req,res) {
    res.render("principal/listForm");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}
module.exports = router;