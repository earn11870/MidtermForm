import { Injectable } from '@angular/core';
import { Flight } from '../components/bookaflight/flight';
import { Mockflight } from './mockflight';
@Injectable({
  providedIn: 'root'
})
export class PageService {
  fillin: Flight[]=[];

  constructor() {
  this.fillin=Mockflight.mflights
}
getFlight():Flight[]{
  console.log(this.fillin);
  return this.fillin;
}
addFlight(f:Flight):void{
  this.fillin.push(f);
}
}
