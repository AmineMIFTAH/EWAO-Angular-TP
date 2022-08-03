import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {

  listTransaction:any;
  myDate:any;

  constructor(private _httpClient: HttpClient) {}

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {


    this._httpClient.get('./assets/data/transactions.json').subscribe((response) => {
      this.listTransaction = response;
    });
    

    setInterval(() => {         
      this.myDate = new Date();
    }, 1000);


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    
  }



}
