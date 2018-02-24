import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  onSubmit(value){
  	console.log(value);
        value.parentId = this.userService.user._id;
        value.permission = 'user';
  	this.userService.createUser(value)
  	.subscribe(res => console.log(res));
  }

//     //data
//     onSubmit(values)	{
//     	console.log(values);
//     	this.userService.createUser(values).subscribe(
//     	(data)=> console.log(data));
 
    
// }

}
