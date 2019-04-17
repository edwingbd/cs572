import { Injectable } from '@angular/core';
import { LogServiceEB } from './log.serviceEB';// i just one to add a logservice

@Injectable({
  providedIn: 'root'
})
export class ServiceGetDataOnLineService {

  constructor(private logServiceEB: LogServiceEB) {
    logServiceEB.logMe("step");
   }
}
