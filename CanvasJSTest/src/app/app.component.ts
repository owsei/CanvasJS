import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CanvasJSTest';

  datos:any[]=[];
  datos2:any[]=[];
  datosSeries:any[]=[];

  constructor(){

    

  }

  ngOnInit() {
    
    var numeroDatos=200;
    for (let index = 0; index < numeroDatos; index++) {
      this.datos.push({x:index,y:index});
    }
    
    var data1={        
        type: "spline",
        showInLegend: true,
        name: "Datos1",
        dataPoints: this.datos
    };


    console.log(this.datos);

    for (let index = 10; index < numeroDatos; index++) {
      this.datos2.push({x:index,y:index});
    }
    var data2={        
      type: "spline",
      showInLegend: true,
      name: "Datos2",
      dataPoints: this.datos2
      };
    console.log(this.datos2);
    
    this.datosSeries.push(data1);
    this.datosSeries.push(data2);
    
    console.log(this.datosSeries);


    
    
  }


  chartOptions = {
		animationEnabled: true,  
		title:{
			text: "Average Monthly Rainfall"
		},
		axisX: {
			title: "Months"
		},
		axisY: { 
			title: "Precipitation (inches)"                   
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
  


}
