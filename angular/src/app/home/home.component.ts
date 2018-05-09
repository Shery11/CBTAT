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
  role:'',
  id: ''
}

role='';
public loading = false;
deve;  
 


projects = [];
users = [];

  ngOnInit() {
  	 	   setTimeout(() =>{
        let b =this.userService.getUser();
        b.subscribe(res=>{
          this.user.username= res.userFullName;
          this.user.email = res.email;
          this.user.role = res.role;
          this.user.id = res._id;
          this.projects = res.projects;
          this.users = res.linked_acccounts;
          if(res.role == 'projectManager'){
            this.role = "Project Manager";
          }else{
            this.role = "Developer";
          }
        });

    },400);

  }

  ngAfterViewInit() {
    
 }


  createNewProject(formData){
    console.log(formData);
    formData.userId = this.user.id;
    
    this.loading = true;
    
    this.projectService.createProject(formData).subscribe((res)=>{
      console.log(res);
       if(res.success){
        $('#myModal2').modal('hide');
        this.loading = false;
        this.ngOnInit();
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
