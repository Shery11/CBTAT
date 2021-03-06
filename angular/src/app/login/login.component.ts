import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http } from '@angular/http';
import {HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/map';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data;
err;
  constructor(private router:Router,private http:Http,
    private userService:UsersService,private h:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(values){
    this.userService.authenticate(values);
    setTimeout(()=>{
            this.err = this.userService.loginErr;
            
    },1000)
     }


}
