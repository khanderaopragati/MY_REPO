import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

showdiv : boolean = true ;
  toggle(){
    // this.showdiv = false;
    this.showdiv = !this.showdiv;
  }
  listItem = ['coffee' , 'tea', 'milk', 'sugar', 'sweet', 'hot', 'cold']
  cars = ["swift", "hyundai", "nexon", "nano", "jaguar", "alto", "wagon", "i10"]
  color = "black"
  getColor (){
    return "pink"
  }
  journey :any = "admin"
}