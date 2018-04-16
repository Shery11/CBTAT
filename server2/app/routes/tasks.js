var express = require('express');
var router = express.Router();

var Project = require('../models/project');
var User = require('../models/user');
var Task = require('../models/tasks')


router.post('/create',function(req,res){

	console.log("create task Route hit");
   
    console.log(req.body);

    var task = new Task();

    task.task_name = req.body.name;
    task.start_date = req.body.startDate;
    task.end_date = req.body.endDate;
    task.short_description = req.body.description;
    task.project_id = req.body.projectId;
    task.created_by = req.body.userId;


    task.save(function(err,data){
     
     	if(err){
    	   res.json({success: false, message: err.message});
        }else{
            console.log(data);
             Project.findOneAndUpdate({ _id : req.body.projectId},{$push:{tasks:data._id}},{new: true},function(err,project){
                if(err){
                    console.log('error occured');
                  res.json({success:false,data:err})
                }else{
                  res.json({success:true, projectData: project,taskData: data});
                }
            })
           
        }
    })


})

module.exports = router;