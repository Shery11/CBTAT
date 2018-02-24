import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,NavigationEnd  } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

title;
   constructor( private route: ActivatedRoute,
  private router: Router) { 
  }
  ngOnInit() {
  	this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
      console.log(currentRoute.snapshot.data);
      this.title = currentRoute.snapshot.data.route;
    })

  }


}
