var express = require('express');
var moment = require('moment');
var router = express.Router();

var Project = require('../models/project');
var User = require('../models/user');
var Task = require('../models/tasks');
var UserActivity = require('../models/user_activity');
var Report = require('../models/report');

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
    userActivity.start_time = req.body.start_time;
    userActivity.end_time = req.body.end_time;

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


router.post('/generateReport',function(req,res){
    console.log(req.body);
    //  now we have everything
    // convert starttime and endTime in to unix timestamp  

    var s = new Date(req.body.startTime);
    var e = new Date(req.body.endTime);

    console.log(s,e);

    var startUnixTime = moment(s, 'YYYY.MM.DD').unix();
    var endUnixTime = moment(e, 'YYYY.MM.DD').unix();

    // console.log(startUnixTime);
    // console.log(endUnixTime);

    


     User.findOne({_id: req.body.developerId}).populate('user_activity').exec(function(err,user){
        if(err){
         res.json({success: false, message: err});
        }else{
            
            
            // got user
            // console.log(user);

            // get all the activities of user
             var activities = user.user_activity;
             // console.log(activities);  

             if(activities.length == 0){
                res.json({success: false, message:"This user has no activities"})
             }else{


                var filteredActivities = filterProjects(activities,req.body.projectId,startUnixTime,endUnixTime);

                if(filteredActivities.length == 0){

                  res.json({success: false, message:"This user has no activities in this project"})
                }
                else{
                    // do the processing
                  // console.log(filteredActivities);
                  var report = processing(filteredActivities);

                   report.save(function(err,report){
                        if(err){
                            res.json({success: false, message:"Unable to generate report"})
                        }else{
                            // console.log(report);
                           res.json({success: true, data: report._id})
                        }
                   })   
                
                }

             }          
            // res.json({success: true, data: user});
        }
    })
})


// this will return all the activities of that project
function filterProjects(activities,projectId,starttime,endtime){
   
   // console.log(activities);  
   // // we will have an array here
   var projectActivities = [];
   console.log(projectId);  
   activities.forEach(function(activity){

    // console.log(activity);
     
     // filter activity
     console.log(activity.project_id,projectId);
     if(activity.project_id == projectId){
        
        console.log("activity matches");
        if( activity.start_time  >= starttime  && endtime >= activity.end_time){
           projectActivities.push(activity);     
        }
       
     }

    }) 

    return projectActivities;

}

function processing(activities){
    // now we have filtered activities

    var KeyboardMouseActivity = 0;
    var applications = [];
    var switchShots = [];

    activities.forEach(function(activity){
        // console.log(activity);
          console.log("========================================================================")
      
        KeyboardMouseActivity = KeyboardMouseActivity + Number(activity.mouse_strokes);
        console.log(activity.applications);

        applications = applications.concat(activity.applications);
        switchShots = switchShots.concat(activity.switchShots);

    })


    // console.log(KeyboardMouseActivity);
    // console.log(applications);
    // console.log(switchShots);
     
    var report = new Report();
    
    report.mouse_strokes = KeyboardMouseActivity;
    report.applications = applications;
    report.switchShots = switchShots; 

    return report;



}






module.exports = router;