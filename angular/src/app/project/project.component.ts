import { ProjectService } from './../project.service';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { CookieService } from 'ngx-cookie';
import { Http } from '@angular/http';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';

declare var $ :any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit,AfterViewInit {


  constructor(private router:ActivatedRoute,private userService:UsersService,private projectService: ProjectService,private http:Http,private _cookieService:CookieService) { 
   
  }

  user ={
    username: '',
    email:'',
    role:'',
    id: ''
  }

  projectid;
  
  role='';
  public loading = false;
   
  
  
  tasks = [];
  
    ngOnInit() {

       this.projectid = this.router.snapshot.params['id'];

       console.log(this.projectid);


            setTimeout(() =>{

           this.projectService.getProjectByid(this.projectid).subscribe(res=>{
             console.log(res);
             if(res.success){
              this.tasks = res.data.tasks;  
        
             }else{
               alert("unable to load tasks")
             }
           })


              
          this.userService.getUser().subscribe(res=>{
            this.user.username= res.userFullName;
            this.user.email = res.email;
            this.user.role = res.role;
            this.user.id = res._id;
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
     formData.userId = this.user.id;
      formData.projectId = this.projectid;

      console.log(formData);
     
      
      this.loading = true;
      
      this.projectService.createTask(formData).subscribe((res)=>{
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
  
  
  
      // onSubmitTemplateBased(value) {
      //     console.log(this.user);
      // }

}
