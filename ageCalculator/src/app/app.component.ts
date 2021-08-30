import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title ='app age calculator'
  
  result:any 
  Agevalue:any = 0

    currentYear: number = new Date().getFullYear();

age(){
  this.Agevalue = this.currentYear - this.result
}

}
