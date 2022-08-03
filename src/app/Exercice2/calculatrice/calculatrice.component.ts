import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css'],
})
export class CalculatriceComponent {
  valeur1!: number;
  valeur2!: number;
  result!: number;
  operation!: string;
  display = false;

  listHis : any = [];

  setDisplay() {
    this.display = true;
    switch (this.operation) {
      case '+':
        this.result = Number(this.valeur1) + Number(this.valeur2);
        break;
      case '*':
        this.result = Number(this.valeur1) - Number(this.valeur2);
        break;
      case '*':
        this.result = Number(this.valeur1) * Number(this.valeur2);
        break;
      case '/':
        this.result = Number(this.valeur1) / Number(this.valeur2);
        break;
    }

    this.listHis.push({
      'valeur1' : this.valeur1,
      'operation' : this.operation,
      'valeur2' :this.valeur2 ,
      'result' : this.result,
      'date' : Date(),
    });

  }

  onRemove(objHis:any){
    var index = this.listHis.indexOf(objHis);
    this.listHis.splice(index, 1);

  }
}
