import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { LoginComponent } from './components/login/login.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customerDetails', component: CustomerDetailsComponent },
  {path: 'transferFunds', component: TransferFundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
