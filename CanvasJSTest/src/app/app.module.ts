import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DygraphsComponent } from './dygraphs/dygraphs.component';
import { CanvasJsComponent } from './canvas-js/canvas-js.component';

@NgModule({
  declarations: [
    AppComponent,
    DygraphsComponent,
    CanvasJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
