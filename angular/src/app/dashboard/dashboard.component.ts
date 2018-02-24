import { Component, OnInit, NgZone} from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ngZone: NgZone,
    private userService:UsersService,
    private router:Router) {
   
     }

  ngOnInit() {
    //this will check for session via token
     this.userService.checkAuthentiate();

  }

}
