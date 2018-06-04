import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { ProjectService } from './../project.service';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { CookieService } from 'ngx-cookie';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import { UsersService } from '../users.service';
declare var $ :any;

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  DoughnutChart : any;
  LineChart : any;
  reportid;
  switchShots = [];
  webcamShots = [];
  screenShots = [];
  applicationNames = [];
  durations = [];
  applications = [];
  colors = [];
  mouseStrokes;

  constructor(private router:ActivatedRoute,private userService:UsersService,private projectService: ProjectService,private _cookieService:CookieService) { }

  ngOnInit() {


   this.reportid = this.router.snapshot.params['rid'];

   console.log(this.reportid);

   setTimeout(() =>{
     

   this.projectService.getReportById(this.reportid).subscribe((res)=>{
       console.log(res);

       if(res.success){

          this.mouseStrokes =  res.data.mouse_strokes;
          this.applications = res.data.applications;
          this.switchShots = res.data.switchShots;


          this.applications.forEach((application)=>{
            //   console.log(application);
              this.applicationNames.push(application.AppName);
              this.durations.push(application.Duration);
              this.colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
              
          })

          console.log(this.colors);

// start
          var doughnutData = {
            labels: this.applicationNames , //names
            datasets: [{
                data: this.durations,//dutrations
                backgroundColor: this.colors
            }]
        };

        var doughnutOptions = {
            responsive: true,
            legend: {
                display: true
            }
        };
        
            this.DoughnutChart = new Chart('doughnutChart', {type: 'doughnut', data: doughnutData, options:doughnutOptions});
//end


var lineData = {
    labels: this.applicationNames,
    datasets: [
        {
            label: "Application Used",
            backgroundColor: "rgba(26,179,148,0.5)",
            borderColor: "rgba(26,179,148,0.7)",
            pointBackgroundColor: "rgba(26,179,148,1)",
            pointBorderColor: "#fff",
            data: this.durations
        },
        
    ]
};

var lineOptions = {
    responsive: true
};



this.LineChart = new Chart('lineChart', {type: 'line', data: lineData, options:lineOptions});



           
       }else{
           alert("unable to get the report")
       }
   })

   

  },400);

  


 
}

}
