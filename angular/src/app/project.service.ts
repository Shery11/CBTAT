import { Injectable, NgZone } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  constructor(private http: Http,private router:Router) { }

  createProject(data){
    console.log(data);
    return this.http.post('http://localhost:3000/project/create',data).map((res)=>res.json());
    
  }

}
