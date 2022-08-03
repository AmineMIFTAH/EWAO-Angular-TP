import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edition-texte',
  templateUrl: './edition-texte.component.html',
  styleUrls: ['./edition-texte.component.css']
})
export class EditionTexteComponent {

  nom:string = "";
  family:string ="sans-serif";
  align:string = "left";
  size:number = 12;


  alignf(event: any){
    console.log(event.target.value);
    this.align = event.target.value;
  }

  getFont(event:any){
    console.log(event);
  }

  getSize(value:any){
    this.size = value
  }
}
