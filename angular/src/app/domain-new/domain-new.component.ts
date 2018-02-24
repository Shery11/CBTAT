import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {DomainsService } from '../domains.service';
import {Http} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-domain-new',
  templateUrl: './domain-new.component.html',
  styleUrls: ['./domain-new.component.css']
})
export class DomainNewComponent implements OnInit {
err;
	constructor(private userService:UsersService,
		private domainService:DomainsService, private http:Http,
	  private router:Router) { }

		
	myId;
	submitData;
domains = this.domainService.getCart().toString();
 name;
 account ='';
 acccountId='';
 nameservers =['ns1.atrixdigital.com','ns2.atrixdigital.com']



contacts;

// contactReturner(c){
// 	this.userService.getUser().subscribe(resp=>{
// 				this.userService.getSubAccounts(resp.user._id).subscribe((res)=>{
// 				      console.log(res);
// 						 this.contacts = res.users;
// 							let f;
// 									for(let i=0;i<this.contacts.length;i++){
// 										if(c== this.contacts[i].contact.id){
// 											f=this.contacts[i].contact.name;
// 											break;
// 										}else{
// 											continue;
// 										}
// 									}
// 									return f;


// 			})

// 			});
// }


  ngOnInit() {

if(!this.userService.user){
	this.router.navigate['/dashboard/domains']
}
  if(this.userService.user){
		console.log('user data coming');
		console.log(this.userService.user);
			this.userService.getUser().subscribe(resp=>{
				this.account =resp.user.username;
				this.acccountId = resp.contact.accountId;
				this.myId = resp.user._id;
				console.log(this.myId);
				this.userService.getSubAccounts(resp.user._id).subscribe((res)=>{
				console.log(res);
				this.contacts = res.users;
				let ux={
					contact: resp.contact,
					parent_id:resp.user.parent_id
				};
							this.contacts.push(ux);

			})

			})
		
	}
		
			

	
		console.log(this.domainService.getCart());

	}
	
	beforeSubmit(values){
		console.log(values);
		this.submitData = values;

	}
   onSubmit(values){
		console.log(values);
		let data = {
			owner:values.owner,
			admin:values.admin,
			tech:values.tech,
			zone:values.zone,
			nameservers:this.nameservers,
			name:values.name

		}
		data.nameservers = this.nameservers;
		console.log(data);
 
  	this.userService.createDomain(data).subscribe(res=>{
  		if(res.success){
							console.log(res);
          	this.router.navigateByUrl('/dashboard')

  		}else{
  		console.log(res);
  		this.err = res.statusText;

  		}
  	});
  }

}
