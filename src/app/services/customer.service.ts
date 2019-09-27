import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  public searchCustomers(searchedText: string) {
    const url = '';
    return this._http.get(url);
  }

  public createMortagage(accountNumber: string) {
    const url = '';

    return this._http.post(url, accountNumber);
  }
}
