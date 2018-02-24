import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http } from '@angular/http';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private http:Http
) { }

id;
user;
  ngOnInit() {
       this.id = this.route.snapshot.params['id'];
       console.log(this.id);

           this.http.post('/user/getSubAccounts', {parentId: this.userService.user._id},this.userService.getHeaders())
        .map((this.userService.extractData))
          .catch(this.userService.handleError)
          .subscribe(resp=>{
            console.log(resp);
            for(let i=0;i<resp.users.length;i++){
              if(this.id == resp.users[i]._id){
                  this.user = resp.users[i];
                  console.log(this.user);
                  break;
              }else{
                continue;
              }

            }
          });
     

  }




  onClick(value){
  	console.log(value);
       
  }

//     //data
//     onSubmit(values)	{
//     	console.log(values);
//     	this.userService.createUser(values).subscribe(
//     	(data)=> console.log(data));
 
    
// }

}
