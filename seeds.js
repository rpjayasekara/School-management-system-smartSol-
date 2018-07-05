var mongoose = require("mongoose");
var passport = require("passport");
var User = require("./models/user");
var Admin   = require("./models/admin");
var Student = require("./models/student");
var Teacher = require("./models/teacher");

var data =  {
    name: "Admin",
    email: "admin@SMS.com"
    };


//====Create admin========

function seedDB(){
    Teacher.remove({},function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("done")
        }
    });
  Student.remove({},function (err) {
      if(err){
          console.log(err);
      }else{
          console.log("done")
      }
  });
  User.remove({},function (err) {
      if(err){
          console.log(err);
      }else{
          Admin.remove({},function (err) {
              if(err){
                  console.log(err);
              }else {
                  User.register({username:"admin",type:"admin"}, "password", function(err, user){
                      if(err){
                          console.log(err);
                      }else{
                          Admin.create(data,function (err,admin) {
                              if(err){
                                        console.log(err);
                                    }else{
                                        admin.authent.id=user._id;
                                        admin.authent.username=user.username;
                                        admin.save();
                                        console.log("Admin created!!!");
                                    }
                                })

                      }

                  });
              }
          })
      }
  })

}

module.exports = seedDB;
