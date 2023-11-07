import { Component,OnInit  } from '@angular/core';
declare const Dygraph: any; // Import Dygraph

@Component({
  selector: 'app-dygraphs',
  templateUrl: './dygraphs.component.html',
  styleUrls: ['./dygraphs.component.css']
})
export class DygraphsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // // Your data for the chart
    // const data = [
    //   [1, 10],
    //   [2, 20],
    //   [3, 30],
    //   // Add more data points as needed
    // ];

    // // Dygraphs configuration
    // const options = {
    //   labels: ['Number', 'Value'],
    // };

    // // Create the Dygraphs chart
    // new Dygraph(document.getElementById('graph'), data, options);
  }

}
