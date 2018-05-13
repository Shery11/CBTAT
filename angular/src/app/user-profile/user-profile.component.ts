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


  constructor(private router:ActivatedRoute,private userService:UsersService,private projectService: ProjectService,private _cookieService:CookieService) { }

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

}
