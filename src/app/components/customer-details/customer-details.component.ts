import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  private customer: any;
  private propertyCost: string;
  private depositAmount: string;

  constructor(private _actRoute: ActivatedRoute, private _messageService: MessageService, private _custService: CustomerService) { }

  ngOnInit() {
    this._actRoute
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.customer = JSON.parse(params['customer']);
      });
  }

  private _createMortgage() {

    let validity: boolean = this._validateDepositAmount();
    if (validity) {
      this._custService.createMortagage(this.customer.accountNumber).subscribe((response) => {
        this._messageService.add({severity:'success', summary:'Service Message', detail:'Mortagage account created Sucessfully'});
      });
    } else {
      this._messageService.clear();
      this._messageService.add({severity: 'error', summary: 'Error Message', detail:'Deposit amount is less than 20% of propert cost'});
    }
  }

  private _validateDepositAmount(): boolean {
    let deposit: boolean = false;

    let percentage = (parseInt(this.depositAmount)/parseInt(this.propertyCost)) * 100;

    if (percentage >= 20) {
      deposit = true;
    }

    return deposit;
  }

}
