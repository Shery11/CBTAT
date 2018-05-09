import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';
import { ProjectService } from './../project.service';


declare var $ :any;



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  taskId;
  projectId;
  isDataLoaded = false;
  loading = false;
  taskData;
  deve;
  projectDevelopers;


  constructor(private router:ActivatedRoute,private userService:UsersService,private projectService: ProjectService,private _cookieService:CookieService) { }

  ngOnInit() {

    this.projectId = this.router.snapshot.params['pid'];
    this.taskId = this.router.snapshot.params['tid'];

    console.log(this.projectId,this.taskId);
    
    setTimeout(() =>{

    this.projectService.getTaskById(this.taskId).subscribe(res=>{
        console.log(res);

        if(res.success){

          this.taskData = res.task;

          this.isDataLoaded = true
          
        }else{
          alert("unable to load task")
        }
    })



    this.projectService.getProjectByid(this.projectId).subscribe(res=>{
      console.log(res);
      if(res.success){
      
        this.projectDevelopers = res.data.developers;
      }else{
        alert("unable to get project developers tasks")
      }
    })

  },400);
  }


  addDeveloperToTask(developerId){
    this.loading = true

    let data ={
      developerId : developerId.developerId,
      taskId : this.taskId
    }
     this.projectService.addDeveloperToTask(data).subscribe(res=>{
       console.log(res);
       this.loading = false;
       if(res.success){
         
        $('#myModal3').modal('hide');
        this.loading = false;


        this.ngOnInit();
        
         
       }else{

        alert("Unable to add task develoeper");

       }
     })
  }

}
