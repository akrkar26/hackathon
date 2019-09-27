import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  public searchCustomers(searchedText: string) {
    const url = `http://192.168.179.87:7090/mortage/usersearch/${searchedText}`;
    return this._http.get(url);
  }

  public createMortagage(accountNumber: string) {
    const url = `http://javaui3007.eastus.cloudapp.azure.com:8080/mortage/create/${accountNumber}`;

    return this._http.post(url, accountNumber);
  }
}
