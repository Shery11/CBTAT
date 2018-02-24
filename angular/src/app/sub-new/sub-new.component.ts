import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sub-new',
  templateUrl: './sub-new.component.html',
  styleUrls: ['./sub-new.component.css']
})
export class SubNewComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit() {
  	if(this.userService.user._id){
  		console.log('user available id:'+this.userService.user._id);
  	}else{
  		console.log('user data not available');
  		//now it will return to login if data is not available.
  	}
  }

//on submit create a sub account
onSubmit(value){
    value.parentId = this.userService.user._id;
            value.permission = 'user';
        console.log(value);
    this.userService.createUser(value)
    .subscribe(res => console.log(res));
  }

}
