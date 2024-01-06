import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  title = 'myApplication';

  // string inter polation : property name : data type = value
    a = 20;
  b: number = 90;
  c!:number;
  city : string = "pune";
  
  a1 = 95;
  b1 = 86;
  c1! : number;
  car : string = "swift";
  
  
  //proprty binding
  //[attribute]=property name
  myName="pragati";
  
  isDisable = false;
  myCar = "nexon";
  day = "sunday";
  
  
  
  //event binding
  fruit!: string;
  favfruit = "pineapple"
  constructor(){}
  submit(){
   this.fruit = "mango" 
  }
  
  animal! : string;
  constructor1(){}
  submit1(){
    this.animal = "tiger"
  }
  
  
  //two way data binding
  
}
