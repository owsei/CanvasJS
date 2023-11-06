import { Component } from '@angular/core';

@Component({
  selector: 'app-canvas-js',
  templateUrl: './canvas-js.component.html',
  styleUrls: ['./canvas-js.component.css']
})
export class CanvasJsComponent {

  title = 'CanvasJSTest';

  datos:any[]=[];
  datos2:any[]=[];
  datosSeries:any[]=[];
  seconds=0;

  constructor(){


  }

  ngOnInit() {
    
    let startDate= new Date();
    var numeroDatos=500000;
    
    this.crearSerie('Serie1',500000);
    this.crearSerie('Serie2',500000);
    this.crearSerie('Serie3',500000);
    this.crearSerie('Serie4',500000);

    let endDate= new Date();
    this.calculateTimeElapsed(startDate,endDate);
  }


  chartOptions = {
		animationEnabled: true,  
		title:{
			text: "Average Monthly Rainfall"
		},
		axisX: {
			title: "Months",
		},
		axisY: { 
			title: "Numbers"                   
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
