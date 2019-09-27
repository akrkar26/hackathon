import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  private accounts = [];
  constructor() { }

  ngOnInit() {
    this.accounts = [
      {
        accountNumber: '1',
        accountType: 'Savings',
        availableBalance: '5000',
        lastTransactionDate: '26/09/2019'
      },
      {
        accountNumber: '2',
        accountType: 'Mortgage',
        availableBalance: '-20000',
        lastTransactionDate: '24/09/2019'
      }
    ];
  }

}
