import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    title = 'Domain';
    data: any = {
    	name:'atrixdigital.com',
    	status:'ordered',
    	billed:'24.0.17'
    }


}
