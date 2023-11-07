import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasJsComponent } from './canvas-js/canvas-js.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'canvasjs',component:CanvasJsComponent
  },
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
