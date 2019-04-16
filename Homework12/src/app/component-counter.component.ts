import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-component-counter',
  template: `
    <p>
      component-counter works!
      
    </p>
    <h1>Component count</h1>
    <div>
      <button (click)="decrement()"> - </button> 
     {{counterValue}} - {{counter}}
      <button (click)="increment()"> + </button> 
    </div>
    <p><ng-content></ng-content></p>
  `,
  styles: []
})
export class ComponentCounterComponent {
  @Input() counter:number;
  @Output() messageClick = new EventEmitter(); 

  public counterValue;
  
  constructor() {
      console.log(this.counter);
      //if the value is not setup by the parent it use his own value
      //if (this.counter===undefined)
          this.counterValue=1;
      //else
      //    this.counter;
   }
  increment() {
    this.counterValue+=1; 
    this.counter+=1;    
    this.messageClick.emit( this.counter.toString());
  }
  decrement() {
    this.counterValue-=1;
    this.counter-=1;    
    this.messageClick.emit( this.counter.toString());
  }


}
