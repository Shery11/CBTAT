import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http } from '@angular/http';
import {HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/map';
import {Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data;
  err;
  deve;
    constructor(private router:Router,private http:Http,
      private userService:UsersService,private h:HttpClient) { }
  
    ngOnInit() {
  
   
    }
  
  onSubmit(values){
    console.log(values);
    console.log(this.deve);
    values.permission = this.deve;
    console.log(values);
      this.userService.register(values);
      setTimeout(()=>{
              this.err = this.userService.loginErr;
              
      })
    }
  

}
