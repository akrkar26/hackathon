import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './components/login/login.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    LoginComponent,
    TransferFundsComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, ButtonModule, InputTextModule, TableModule, CardModule, ToastModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
