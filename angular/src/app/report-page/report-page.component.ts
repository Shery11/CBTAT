import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  DoughnutChart : any;

  constructor() { }

  ngOnInit() {

    var doughnutData = {
      labels: ["App","Software","Laptop" ],
      datasets: [{
          data: [70,27,85],
          backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
      }]
  };


  var doughnutOptions = {
    responsive: true,
    legend: {
        display: true
    }
};

    this.DoughnutChart = new Chart('doughnutChart', {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    

    

  }

}
