import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-counter',
  template: `
    <p>
      component-counter works!
      
    </p>
    <h1>Component count</h1>
    <div>
      <button (click)="decrement()"> - </button> 
     {{counterValue}} 
      <button (click)="increment()"> + </button> 
    </div>
    
  `,
  styles: []
})
export class ComponentCounterComponent implements OnInit {
  public counterValue;
  constructor() {
    this.counterValue=1;
   }
  increment() {
    this.counterValue+=1;    
  }
  decrement() {
    this.counterValue-=1;    
  }
  ngOnInit() {
  }

}
