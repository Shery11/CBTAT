import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username;
  constructor(private userService:UsersService) { }

  ngOnInit() {
  	   setTimeout(() =>{
  	let b =this.userService.getUser();
    b.subscribe(res=>{
    	this.username= res.user.username;
    });

},400);

}

}
