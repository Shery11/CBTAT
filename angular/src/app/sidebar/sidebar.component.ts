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
  constructor(private zone:NgZone,private userService:UsersService) {
  }



 ngOnInit() {
 	   setTimeout(() =>{
  	let b =this.userService.getUser().subscribe((res)=>{
  		    this.username =res.user.username;
            this.permission =res.user.permission;
  	});


},400);

}

}
