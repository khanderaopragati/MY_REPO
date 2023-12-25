import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';

//property name : data type = value
  a = 20;
b: number = 90;
c!:number;

}


