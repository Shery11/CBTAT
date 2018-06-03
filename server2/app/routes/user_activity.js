var express = require('express');
var router = express.Router();

var Project = require('../models/project');
var User = require('../models/user');
var Task = require('../models/tasks');
var UserActivity = require('../models/user_activity');


router.post('/save',function(req,res){

	console.log("save user_activity Route hit");
   
    console.log(req.body);

    var userActivity = new UserActivity();

    userActivity.mouse_strokes =  req.body.KeyboardMouseActivity;
    userActivity.applications = req.body.AppsActivity;
    userActivity.notes = req.body.Notes;
    userActivity.switchShots = req.body.SwitchShots;
    userActivity.webcamShots = req.body.WebCamShots;
    userActivity.project_id = req.body.project_id;
    userActivity.task_id = req.body.task_id;
    userActivity.user_id = req.body._id;
    userActivity.start_time = req.body.start;
    userActivity.end_time = req.body.end;

    console.log(userActivity);

    userActivity.save(function(err,doc){
        if(err){
        	console.log(err);
           res.json({success:false,message:err});
        }else{

        	 User.findOneAndUpdate({ _id : req.body._id},{$push:{user_activity:doc._id}},{new: true},function(err,user){
                if(err){
                    console.log('error occured');
                  res.json({success:false,data:err})
                }else{
                  res.json({success:true, userData: user,activityData: doc});
                }
            })
            
        }
    })

})




module.exports = router;