import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GraphicsLibraries';

  @ViewChild('tabGroup') tabGroup: MatTabGroup;


  constructor(){
  }

  ngOnInit() {
    this.crearSerie('Serie1',500000);
  }

  datosSeries:any[]=[];

  chartOptions = {
		animationEnabled: true,  
		title:{
			text: "Prueba de Grafica"
		},
		axisX: {
			title: "Numbers x axis",
		},
		axisY: { 
			title: "Numbers Y axis"                   
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

  selectTab(tabIndex: number): void {
    this.tabGroup.selectedIndex = tabIndex;
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
