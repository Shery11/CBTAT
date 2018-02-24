import { Injectable } from '@angular/core';
import {Router,CanActivate} from "@angular/router";
import { UsersService} from './users.service';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService,private router:Router,
  	private _cookieService:CookieService) {}; 

canActivate() {
	if(this._cookieService.get('x-access-token') || this.userService.checkloggedIn()==true){
		return true;
	}else{
		return false;
	}

}

}