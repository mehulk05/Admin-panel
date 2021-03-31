import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  canvas: any;
  canvas2: any;
  ctx: any;
  ctx2:any
  @ViewChild('mychart') mychart: any;
  @ViewChild('mychart2') mychart2: any;
  
  data = {
    labels: ["Mar 1","Mar2", "Mar 3","mar 4", "Mar 5","mar 6", "mar 7", "mar 7","Mar 9", "mar 7","Mar 11", "mar 7","Mar 13"],
    datasets: [   
      {
        label: "Minimo",
        data: [1000,3000,2626,1839,1828,2868,3127,3325,2584,2415,3265,3198,3845],
        type: 'line',
        borderColor:'#0176d8',
        backgroundColor:'#CDEBFF',
        fill: true
      }
    ]
  };
  options = {
    responsive: true,
    scales: {
      xAxes: [{
        afterTickToLabelConversion: function(data: { ticks: any; }){


          var xLabels = data.ticks;

          xLabels.forEach(function (labels: any, i: number) {
              if (i % 2 == 1){
                  xLabels[i] = '';
              }
          });
    },
  }],
      yAxes: [{
          ticks: {
              beginAtZero: true,
              stepSize:1000
          }
      }]
  }
  };


  data2 = {
    labels: ["Mar 1", "Mar 3", "Mar 5", "mar 7", "Mar 9", "Mar 11", "Mar 13"],
    datasets: [   
      {
        label: "Minimo",
        data: [3000,2626,3828,2868,3127,3325,2584],
        type: 'bar',
        borderColor:'#4BB7FF',
        backgroundColor:'#0176d8',
        fill: true
      }
    ]
  };
  options2 = {
    responsive: true,
    yAxes: [{
      ticks: {
          min: 0,
          max: 20000,
          stepSize:2000,
        
    }
  }]
  };
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    this.canvas2 = this.mychart2.nativeElement; 
    this.ctx2 = this.canvas2.getContext('2d');
  
    var myLineChart = new Chart(this.ctx, {
    type: 'line',
    data: this.data,
    options: this.options,
    
});



var myLineChart2 = new Chart(this.ctx2, {
  type: 'bar',
  data: this.data2,
  options: this.options2,
  
});
  }

}
