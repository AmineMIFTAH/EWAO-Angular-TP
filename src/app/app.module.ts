import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditionTexteComponent } from './Exercice1/edition-texte/edition-texte.component';
import { CalculatriceComponent } from './Exercice2/calculatrice/calculatrice.component';
import { TransactionComponent } from './Exercice3/transaction/transaction.component';
import { DetailTransactionComponent } from './Exercice3/detail-transaction/detail-transaction.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    EditionTexteComponent,
    CalculatriceComponent,
    TransactionComponent,
    DetailTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
