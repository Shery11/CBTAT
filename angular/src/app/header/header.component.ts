import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username;
  constructor(public userService:UsersService) { }

  user ={
    username: '',
    email:'',
    role:''
  }
  
  role='';
  
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

}
