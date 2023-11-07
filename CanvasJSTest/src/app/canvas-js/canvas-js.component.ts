import { Component,OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-js',
  templateUrl: './canvas-js.component.html',
  styleUrls: ['./canvas-js.component.css']
})
export class CanvasJsComponent implements OnInit,AfterViewInit{

  datos:any[]=[];
  datos2:any[]=[];
  datosSeries:any[]=[];
  seconds=0;

  constructor(){
    
  }

  ngOnInit() {
    
    
  }

  ngAfterViewInit(){
    let startDate= new Date();
    
    this.crearSerie('Serie1',500000);
    let endDate= new Date();
    this.calculateTimeElapsed(startDate,endDate);
  }


  chartOptions = {
		animationEnabled: true,  
		title:{
			text: "Canvas JS Test"
		},
		axisX: {
			title: "Numbers X",
		},
		axisY: { 
			title: "Numbers Y"                   
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			itemclick: function(e:any) {
			  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
				e.dataSeries.visible = false;
			  } else {
				e.dataSeries.visible = true;
			  }
			  e.chart.render();
			}
		},
		data: this.datosSeries
	}	

  calculateTimeElapsed(startDate: Date, endDate: Date) {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const milliseconds = timeDifference;
    this.seconds = milliseconds / 1000;
  }

  crearSerie(nombre:string,numeroDatos:number){
    var datos=[];
    for (let index = 0; index < numeroDatos; index++) {
      // var n2=Math.floor(Math.random() * (5 - 0) + index);
      datos.push({x:index,y:index});
    }
    
    var dataSerie={        
      type: "spline",
      showInLegend: true,
      name: nombre,
      dataPoints: datos
    };

    this.datosSeries.push(dataSerie);
  }
}
