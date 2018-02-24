import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Http} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DomainsService} from '../domains.service'


@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domain: string;
  constructor(private http:Http, private myService:DomainsService) { 
  }

onKeyUp(){
	console.log(this.domain);
}
  ngOnInit() {
  }

      title = 'Domains';
       data: any = {
    	name:'atrixdigital.com',
    	status:'ordered',
    	billed:'24.0.17'
    }



    //data
    onSubmit(values)	{
    	console.log(values);
    	// this.http.post('/api/contact',{
    	// 	name:'moied'
    	// }).subscribe(
    	// (data)=> console.log(data));
    	// this.myService.obj.name = this.domain;
    	// console.log(this.myService.obj.name);
    
}

}
