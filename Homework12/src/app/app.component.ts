import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework12';
  public parentCounter = 34;
  public infor;
  showOutputData(info){
    this.infor=info;
    console.log('llego='+info);
  }
}


