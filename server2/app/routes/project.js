var express = require('express');
var router = express.Router();

var Project = require('../models/project');


router.post('/create',function(req,res){

	console.log("create project Route hit");
   
    console.log(req.body);

    var project = new Project();

    project.project_name = req.body.name;
    project.start_date = req.body.startDate;
    project.end_date = req.body.endDate;
    project.short_description = req.body.description;


    project.save(function(err,data){

    	console.log(err);
    	console.log(data);
    	if(err){
    	   res.json({success: false, message: err.message});
        }else{
        	res.json({success: true, message: "Project created successfully"});
        }
    })


})

module.exports = router;