import { ProjectService } from './../project.service';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { CookieService } from 'ngx-cookie';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';
declare var $ :any;



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  developerId;
  developerData;
  loadData = false;
  projects = [];
  loading = false;
  recentProjectId;
  showReportButton = false;
  reportid;
  message;


  constructor(private router:ActivatedRoute,private userService:UsersService,private projectService: ProjectService) { }

  ngOnInit() {


    this.developerId = this.router.snapshot.params['did'];
    // get all thee developer data

    setTimeout(() =>{

    this.userService.getDeveloperById(this.developerId).subscribe(res=>{
       console.log(res);
      if(res.success){

       this.developerData = res.data;
       this.loadData = true;
         
      }else{
         alert("unablet tp get developer data")
      }
    })

  },400);

  


  }


  findDeveloperProjects(developerProjects){
    
  }


  setProjectID(id){
    console.log("clicked");
    this.recentProjectId = id;
    console.log(this.recentProjectId);
  }


  generateReport(formData){

    //  we need project id and user id as aswell

    this.loading = true;

    console.log(this.developerId);
    console.log(this.recentProjectId);

    console.log(formData);

    var data = {
      projectId : this.recentProjectId,
      developerId : this.developerId,
      startTime: new Date( formData.startDate),
      endTime : new Date( formData.endDate)
    }


    this.projectService.generateReport(data).subscribe(res=>{
      console.log(res)
     
      if(res.success){
        this.loading = false;
       
        this.showReportButton = true;
        this.message = "Click on this button to get the report";
        this.reportid = res.data;
        
      }else{
        this.loading = false;
        this.showReportButton = false;
        // $('#myModal3').modal('hide');
        alert("unable top generate report");
      }
    })


    

  }

  hideModal(){
    $('#myModal3').modal('hide');
  }

}
