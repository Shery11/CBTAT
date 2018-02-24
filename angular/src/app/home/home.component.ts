import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Http } from '@angular/http';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import {UsersService } from '../users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UsersService,private http:Http,private _cookieService:CookieService) { }

user ={
	username: '',
	email:''
}

  ngOnInit() {
  	 	   setTimeout(() =>{
  	let b =this.userService.getUser();
    b.subscribe(res=>{
      this.user.username= res.user.username;
      this.user.email = res.user.email;
    });

},400);

  }



    onSubmitTemplateBased(value) {
        console.log(this.user);
    }
}
