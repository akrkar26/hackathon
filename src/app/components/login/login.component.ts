import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userName: string;
  private password: string;
  private users = [];

  constructor(private _router: Router, private _messageService: MessageService) { }

  ngOnInit() {
    let data = localStorage.getItem('users');
    this.users = JSON.parse(data);
  }

  private _login() {
    if (this.userName && this.password) {
      this.users.forEach((user) => {
        if (user.userName.toLowerCase() === this.userName.toLowerCase() && user.password.toLowerCase() === this.password.toLowerCase()) {
          if (user.userType === 'A') {
            this._router.navigate(['home']);
          }else {
            this._router.navigate(['transferFunds']);
          }
        } else {
          this._showErrorMessage();
        }
      });
    } else {
      this._showErrorMessage();
    }
    
  }

  private _showErrorMessage() {
    this._messageService.clear();
    this._messageService.add({severity: 'error', summary: 'Error Message', detail:'Invalid Credentials'});
  }

}
