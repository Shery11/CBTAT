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
  	private cookieService:CookieService) { }


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
        return this.http.get('http://localhost:3000/user/getUserData', options)
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
	console.log(this.cookieService.get('x-access-token'))
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
	  this.http.post('http://localhost:3000/users/authenticate',loginObj)
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
	return this.http.get('http://localhost:3000/api/contacts')
			.map(res => res.json());
}
//get current user data
getUser(){		
	 return this.http.get('http://localhost:3000/user/getUserData', this.getHeaders())
	        .map((this.extractData))
	        .catch(this.handleError);
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
//on update basic data
updateBasicData(){

}

//registering
register(data){
	console.log(data);
	return this.http.post('http://localhost:3000/users/register', data)
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

createDomain(data){
	 let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');    
	//myHeaders.append('x-access-token', this.cookieService.get('x-access-token'));   
	   let options = new RequestOptions({ headers: myHeaders });
	 return this.http.post('/domain/createDomain',data,options)
  	 //.map((this.extractData))
	        .catch(this.handleError);

}
checkDomain(data){
		 let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');    
	//myHeaders.append('x-access-token', this.cookieService.get('x-access-token'));   
	   let options = new RequestOptions({ headers: myHeaders });
	return this.http.post('http://localhost:3000/domain/domainStatus', data,options)
	.subscribe(res=>{
		console.log(res);
	})
}
//get sub accounts
getSubAccounts(id){
	 return this.http.post('/user/getSubAccounts', {parentId: id},this.getHeaders())
	      .map((this.extractData))
	        .catch(this.handleError);
}



}

