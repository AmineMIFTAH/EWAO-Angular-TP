import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css']
})
export class DetailTransactionComponent implements OnInit {

  id: any;
  transaction:any;
  myDate:any;

  constructor(private route: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._httpClient.get('./assets/data/'+this.id+'.json').subscribe((response) => {
      this.transaction = response;
      console.log(response);
    });

    setInterval(() => {         
      this.myDate = new Date();
    }, 1000);
  }

}
