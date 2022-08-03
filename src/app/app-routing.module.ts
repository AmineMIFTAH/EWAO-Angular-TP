import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditionTexteComponent } from './Exercice1/edition-texte/edition-texte.component';
import { CalculatriceComponent } from './Exercice2/calculatrice/calculatrice.component';
import { TransactionComponent } from './Exercice3/transaction/transaction.component';
import { DetailTransactionComponent } from './Exercice3/detail-transaction/detail-transaction.component';



const routes: Routes = [
  { path: '', component: EditionTexteComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'transaction/:id', component: DetailTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
