var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Principal = require("../models/principal");
var Admin = require("../models/admin");
var Leave = require("../models/leave");
var Attendence = require("../models/attendence");
var Assignment = require("../models/assignment");
var fs = require('fs');
var path = require('path');


router.get("/leaveapplication/new",function (req,res) {

    res.render("teacher/newLeaveapplication");
});

router.get("/leaveapplication",function (req,res) {
    Leave.find({'username' : req.user.username}, function(err, leaves){
        res.render("teacher/viewLeaveapplication",{
            leaves:leaves
        });
    });


});

router.get("/leaveapplication/detailview",function (req,res) {
    res.render("teacher/detailLeaveapplication");
});



router.get("/assignments/add",function (req,res) {
    res.render("teacher/addAssignment");
});

router.get("/assignments",function (req,res) {
    res.render("teacher/viewAssignment");
});

router.get("/markattendance",function (req,res) {
    Student.find({}, function(err, students){
        console.log(students);
        if(err){
            console.log(err);
        } else {
            res.render('teacher/markattendence', {
                students: students

            });

        }
    });

});

router.post("/markattendence",function (req,res) {
    Student.find({}, function(err, students){
        console.log(students);
        if(err){
            console.log(err);
        } else {
            students.forEach(function (student) {
                let attendence = new Attendence();
                attendence.username = student.name;
                attendence.date = new Date();
                attendence.class = "11A";
                if(req.body.state=='present'){attendence.state = true;}
                else{attendence.state = false}
                attendence.save();
                res.render('teacher/index');
            })

        }
    });


});

router.post("/leaveapplication",function (req,res) {
    req.checkBody('startdate','startdate is required').notEmpty();
    req.checkBody('enddate','enddate is required').notEmpty();
    req.checkBody('reason','reason is required').notEmpty();
    
    // Get Errors
    let errors = req.validationErrors();

    if(errors){
        // res.render("Error", {
        //     errors:errors
        // });
    }
    else{
        let leave = new Leave();
        leave.startdate = req.body.startdate;
        leave.enddate = req.body.enddate;
        leave.reason = req.body.reason;
        leave.username = req.user.username;
        leave.status = false;

        leave.save(function(err){
            if(err){
                console.log(err);
                return;
            } else {
                res.redirect('/teachers/leaveapplication');
            }
        });
    }
  });

router.post("/assignment",function (req,res) {
    req.checkBody('name','startdate is required').notEmpty();
    req.checkBody('description','enddate is required').notEmpty();
    req.checkBody('duedate','reason is required').notEmpty();
    req.checkBody('time','startdate is required').notEmpty();


    // Get Errors
    let errors = req.validationErrors();

    if(errors){
        // res.render("Error", {
        //     errors:errors
        // });
    }

    else{
        let assignment = new Assignment();

        console.log('file info: ', req.file);
        var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
            imgUrl = '';

        for (var i = 0; i < 6; i += 1) {
            imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        var tempPath = req.file.path, //<line 55 error
            ext = path.extname(req.file.originalname).toLowerCase(),
            targetPath = path.resolve('./public/upload/' + imgUrl + ext);

        if (ext === '.png' || ext === '.jpg' || ext === '.doc' || ext === '.pdf' || ext === '.pptx' || ext === '.xlsx' || ext === '.docx' || ext === '.txt') {
            fs.rename(tempPath, targetPath, function (err) {
                if (err) throw err;
                console.log("Upload completed!");
            });
        } else {
            fs.unlink(tempPath, function () {
                if (err) throw err;
                res.json(500, {error: 'Only image files are allowed.'});
            });
        }


        assignment.name = req.body.name;
        assignment.class = req.body.class;
        assignment.description = req.body.description;
        assignment.duedate = req.body.duedate ;
        assignment.filename =targetPath ;
        assignment.module=req.body.module;

        assignment.save(function(err){
            if(err){
                console.log(err);
                return;
            } else {
                res.redirect('/dashboard');
            }
        });
    }
});

module.exports = router;