import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router:Router, private userService:UsersService) { }

  ngOnInit() {
  
  }

}
