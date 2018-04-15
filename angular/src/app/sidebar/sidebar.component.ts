import { Component, OnInit,NgZone } from '@angular/core';
import {UsersService } from '../users.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
username;
permission;
  constructor(private zone:NgZone,public userService:UsersService) {
  }



 ngOnInit() {
 	   setTimeout(() =>{
  	let b =this.userService.getUser().subscribe((res)=>{
      console.log(res);
  		    this.username =res.username;
            this.permission =res.permission;
  	});


},400);

}

}
