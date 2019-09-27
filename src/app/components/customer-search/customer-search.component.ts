import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  private searchText: string = '';
  private searchedCustomers = [];

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {

  }

  private _searchCustomer() {

    this.searchedCustomers = [];
    this._customerService.searchCustomers(this.searchText).subscribe((response: any) => {
      this.searchedCustomers = response;
    });
    let mockData = [
      {
        "accountId": "1",
        "userName": "Dinesh",
        "firstName": "Dinesh",
        "lastName": "Babu",
        "dateOfBirth": "01-10-1991",
        "street": "Abc",
        "houseNumber": "27",
        "zipCode": "68161",
        "city": "Mannheim",
        "branchId": "135666",
        "accountType": "Savings",
        "accountNumber": "98765",
        "gender": 'Male'
      },
      {
        "accountId": "2",
        "userName": "Atul",
        "firstName": "Atul",
        "lastName": "Raj",
        "dateOfBirth": "26-09-1990",
        "street": "U4",
        "houseNumber": "27",
        "zipCode": "68161",
        "city": "Mannheim",
        "branchId": "6578",
        "accountType": "Savings",
        "accountNumber": "4578",
        "gender": 'Male'
      }
    ]

    //this.searchedCustomers = mockData;
  }

}
