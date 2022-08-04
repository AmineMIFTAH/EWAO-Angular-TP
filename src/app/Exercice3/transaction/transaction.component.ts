import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {

  listTransaction:any;
  myDate:any;

  dtOptions: DataTables.Settings = {};

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    var listLocal = localStorage.getItem("listLocal");
    if(listLocal == null)
    {
      this._httpClient.get('./assets/data/transactions.json')
      .subscribe(response => {
        this.listTransaction = response;
        localStorage.setItem("listLocal", JSON.stringify(response));
      });
    }else{
      this.listTransaction = JSON.parse(listLocal);
      console.log('sla3');
    }

    // this._httpClient.get('./assets/data/transactions.json')
    //   .subscribe(response => {
    //     this.listTransaction = response;
    //   });

    
    

    setInterval(() => {         
      this.myDate = new Date();
    }, 1000);




    
  }


}
