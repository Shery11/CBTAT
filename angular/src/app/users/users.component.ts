import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data;

  constructor(private http:Http, private userService:UsersService) { }
  ngOnInit() {
this.userService.getUser().subscribe(res=>{
	      	console.log(res.user._id)
	      	 this.http.post('/user/getSubAccounts', {parentId: this.userService.user._id},this.userService.getHeaders())
	      .map((this.userService.extractData))
	        .catch(this.userService.handleError)
	        .subscribe(resp=>{
	        	console.log(resp);
	        	this.data = resp.users;
	        });
	      });

 }

 

  }