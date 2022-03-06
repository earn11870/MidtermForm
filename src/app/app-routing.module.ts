
import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router, Routes } from '@angular/router';
import { BookaflightComponent } from './components/bookaflight/bookaflight.component';


const routes:Routes = [
  {path:'Flight',component:BookaflightComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
