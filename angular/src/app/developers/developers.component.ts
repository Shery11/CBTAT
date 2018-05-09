import { ProjectService } from './../project.service';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { CookieService } from 'ngx-cookie';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';
declare var $ :any;

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  users = [];
  loading = false;
  user ={
    username: '',
    email:'',
    role:'',
    id: ''
  }
  role='';
  constructor(private userService:UsersService,private projectService: ProjectService,private _cookieService:CookieService) { }



  ngOnInit() {

    setTimeout(() =>{
      let b =this.userService.getUser();
      b.subscribe(res=>{
        console.log(res);
        this.user.username= res.userFullName;
        this.user.email = res.email;
        this.user.role = res.role;
        this.user.id = res._id;
        this.users = res.linked_acccounts;
        if(res.role == 'projectManager'){
          this.role = "Project Manager";
        }else{
          this.role = "Developer";
        }
      });

  },400);
  }


  createNewUser(data){
    this.loading = true;
    
    data.permission = 'developer'
    data.mid = this.user.id;
    console.log(data);

    this.userService.createNewUser(data).subscribe(res=>{
      console.log(res);
      if(res.success){
        $('#myModal3').modal('hide');
        this.loading = false;
        this.ngOnInit();
      }else{
        $('#myModal3').modal('hide');
        this.loading = false;
        alert("Unable to create new user")
      }
    })
  }


  addDeveloper(data){
    
    data.managerId = this.user.id;
    console.log(data);
    
    this.loading = true
    this.userService.addExistingUserToLinkedAccounts(data).subscribe(res=>{
      console.log(res);

      if(res.success){
        $('#myModal4').modal('hide');
        this.loading = false;
        this.ngOnInit();
      }else{
        this.loading = false;
        alert("Unable to add new user")
      }
    })
  }


}
