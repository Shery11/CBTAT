import { Injectable, NgZone } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {
user;
loggedInStatus;
token;
loginErr;
  constructor(private http: Http,private router:Router,
  	private zone:NgZone,
  	private cookieService:CookieService) {}


extractData(res){
	let body = res.json();
	return body;
}
handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
}
//checks for token
//must set header : ....
checkAuthentiate(){
	//get the token returned from login
	if(this.cookieService.get('x-access-token')){
		//if i have the token 
		 let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');    
	myHeaders.append('x-access-token', this.cookieService.get('x-access-token'));   
	   let options = new RequestOptions({ headers: myHeaders });
				console.log(this.cookieService.get('x-access-token'));
        return this.http.get('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/fullUserData', options)
	        .map((this.extractData))
	        .catch(this.handleError)
	        .subscribe(res=>{
	        	if(res.success){
	        		this.user =res.user;
	        		this.loggedInStatus =res.success;
	        	}else{
	        		this.loggedInStatus =res.success;
	        		this.router.navigate(['/login'])
	                this.router.navigateByUrl('/login')
	        	}
	        	console.log(res);
	        })
    }


}




getHeaders(){
        let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');    
	myHeaders.append('x-access-token', this.cookieService.get('x-access-token'));   
	   let options = new RequestOptions({ headers: myHeaders });
	   return options; 		
}


//logout
logOut(){
	console.log('logging out')
	this.cookieService.remove('x-access-token');
	console.log(this.cookieService.get('x-access-token'));
	this.loggedInStatus = false;
	setTimeout(()=>{
			this.router.navigateByUrl('/login');
	},300)
}
//get Token 
//getToken(){
	//return this.token;
//}
// Authenticate Login 
authenticate(loginObj){
	 console.log(loginObj);
	  this.http.post('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/authenticate',loginObj)
    .map((res)=>res.json()).subscribe((res)=> {
      console.log(res);
     if(res.success){
       console.log(res.success);
       //now saving token
       this.user = res.user;
       this.loggedInStatus = res.success;
       this.token = res.token;
       this.cookieService.put('x-access-token', this.token);
      setTimeout(() =>{
      	     this.router.navigateByUrl('/dashboard');

      }, 300);

     }else{
       console.log(res.success);
       this.loginErr = res.message;
              console.log(this.loginErr);

}

});

}


checkloggedIn(){
return this.loggedInStatus

}
routeCheck(){
	if(this.checkloggedIn()){
      //  this.router.navigate['dashboard'];
	}else{
	//	this.router.navigate['login'];
	}
}
// USER

//get All Users
getUsers(){
	return this.http.get('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/api/contacts')
			.map(res => res.json());
}
//get current user data
getUser(){		
	 return this.http.get('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/fullUserData', this.getHeaders())
	        .map((this.extractData))
	        .catch(this.handleError);
}

addExistingUserToLinkedAccounts(data){
	console.log(data);

	return this.http.post('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/addExistingUserToLinkedAccounts',data).map(res=> res.json());
}




//create a new user
createUser(data){
	return this.http.post('/user/register',data)
			.map(res => res.json());
}
//populate basic data
loadBasicData(){
	return this.getUser();
}



createNewUser(data){
	console.log(data);
	return this.http.post('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/registerUser',data).map(res=> res.json());
}

//registering
register(data){
	console.log(data);
	return this.http.post('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/register', data)
	.map(res => res.json()).subscribe(res=>{
	    console.log(res);
		if(res.success){
			setTimeout(() =>{
				this.router.navigateByUrl('/login');
 
	     }, 300);
		   
	   }else{

		 this.loginErr = res.message;

	   }
	});
}

getDeveloperById(developerId){

	var data = {
		developerId: ''	 
	};

	data.developerId = developerId;

  return this.http.post('https://us-central1-donkey-rewards.cloudfunctions.net/cbtat/users/getUserById', data).map(res => res.json());
}


}

