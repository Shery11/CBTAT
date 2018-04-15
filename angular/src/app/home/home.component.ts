import { ProjectService } from './../project.service';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Http } from '@angular/http';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{

  constructor(private userService:UsersService,private projectService: ProjectService,private http:Http,private _cookieService:CookieService) { 
   
  }

user ={
	username: '',
  email:'',
  role:''
}

role='';
public loading = false;
 


projects = [
  {
    _id:"345345jhk4j5k",
    name: "XYZ",
    startDate:"3/5/2018",
    endDate : "5/7/2018",
    description:"this is lorem ipsun doller statum "
  },
  {
    _id:"345345jhk4j5k",
    name: "XYZ",
    startDate:"3/5/2018",
    endDate : "5/7/2018",
    description:"this is lorem ipsun doller statum "

  },
  {
    _id:"345345jhk4j5k",
    name: "XYZ",
    startDate:"3/5/2018",
    endDate : "5/7/2018",
    description:"this is lorem ipsun doller statum "
 },
  {
    _id:"345345jhk4j5k",
    name: "XYZ",
    startDate:"3/5/2018",
    endDate : "5/7/2018",
    description:"this is lorem ipsun doller statum "
 },
  {
    _id:"345345jhk4j5k",
    name: "XYZ",
    startDate:"3/5/2018",
    endDate : "5/7/2018",
    description:"this is lorem ipsun doller statum "
 }
]

  ngOnInit() {
  	 	   setTimeout(() =>{
        let b =this.userService.getUser();
        b.subscribe(res=>{
          this.user.username= res.userFullName;
          this.user.email = res.email;
          this.user.role = res.role;
          if(res.role == 'projectManager'){
            this.role = "Project Manager";
          }else{
            this.role = "Developer";
          }
        });

    },400);

  }

  ngAfterViewInit() {
    $('#data_5 .input-daterange').datepicker({
      keyboardNavigation: false,
      forceParse: false,
      autoclose: true
    });
 }


  add(formData){
    console.log(formData);
    
    this.loading = true;
    
    this.projectService.createProject(formData).subscribe((res)=>{
      console.log(res);
       if(res.success){
        this.projects.push(formData);
        $('#myModal2').modal('hide');
        this.loading = false;
       }else{
        $('#myModal2').modal('hide');
         alert("Unable to save data");
         this.loading = false;
       }
    });
 }



    onSubmitTemplateBased(value) {
        console.log(this.user);
    }
}
