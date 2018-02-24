import { Component, OnChanges,SimpleChange ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { UsersService } from './users.service';
@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  s;

  obj ={
    username :"admin",
    password : "admin"
  }
    
    constructor(private userService:UsersService){}

  ngOnInit() {
    //This will check if token available else back to login
   // this.userService.checkAuthentiate();
    

  }



  // onSubmit =function(user){
  //   console.log(user);
  //   this.myService.postIt(user)
  //   .subscribe(res =>{
  //     console.log(res);
  //     this.loggedIn = !this.loggedIn;
  //   } );

  //   this.val();
  // }

}
