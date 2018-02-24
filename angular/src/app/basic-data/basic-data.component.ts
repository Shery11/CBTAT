import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule,FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import {Http} from '@angular/http';
import {UsersService} from '../users.service';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css']
})

export class BasicDataComponent implements OnInit {
data={
	id:null,
	name:'',
	email:'',
	addition:'',
	permission:'',
	address:'',
	postalCode:'',
	city:'',
	country:'',
	phone:'',
	fax:''
}

countries = [];


  constructor(private userService:UsersService, private http:Http) {}

  ngOnInit() {
	  this.http.get('https://restcountries.eu/rest/v2/all').map((res)=>{
		  return res.json()
		  }).subscribe((resp)=>{
			  this.countries = resp;
			  console.log(resp.name);
	  })	

  	 setTimeout(()=>{ 
  	 	let x = this.userService.getUser();
  	 	x.subscribe(res=>{
  	 		this.data = {
  	 		id:res.user._id,
			name:res.user.username,
			email:res.user.email,
			addition:'addition',
			permission:res.user.permission,
			address:res.user.address,
			postalCode:res.user.postalCode,
			city:res.user.city,
			country:res.user.country,
			phone:res.user.phone,
			fax:'fax'
  	 		}
  	 	}); /*subscribe closes*/
},399);/*timeout closes*/

  }


  updateData(data){
	  data.id = this.data.id;	
	  console.log(data);
  }


}