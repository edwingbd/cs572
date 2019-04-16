import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>adsfadsfadsf</h1>
  <p>{{title}}</p>
  `,// one way data binding in one way 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appName';
}
