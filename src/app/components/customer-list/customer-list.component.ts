import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() private customers = [];
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  private _showCustomerDetails(customer) {
    this._router.navigate(['customerDetails'], { queryParams: { customer: JSON.stringify(customer) } });
  }

}
