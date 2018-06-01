import { Injectable, NgZone } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  URL = "http://localhost:3000";


  constructor(private http: Http,private router:Router) { }

  createProject(data){
    console.log(data);
    return this.http.post(URL+'/project/create',data).map((res)=>res.json());
    
  }


  createTask(data){
    console.log(data);
    return this.http.post(URL+'/task/create',data).map((res)=>res.json());
    
  }


  getProjectByid(data){
    console.log(data);
    var d= {
     id : ''
    };
    d.id = data;
    console.log(d);
    return this.http.post(URL+'/project/getById',d).map((res)=>res.json());
    
  }

  addDeveloperToProject(data){
    console.log(data);
   
    return this.http.post(URL+'/project/addDeveloper',data).map((res)=>res.json());
  }


  getTaskById(taskId){
    console.log(taskId);

    var id= {
      id:taskId
    }

    return this.http.post(URL+'/task/getTaskById',id).map((res)=>res.json());
  }


  addDeveloperToTask(data){
    console.log(data);

    return this.http.post(URL+'/task/addDeveloper',data).map((res)=>res.json());
  }

}
