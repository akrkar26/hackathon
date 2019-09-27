import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathon';

  constructor() {
    let user = [{userName: 'atul', password: 'atul', userType: 'U'}, {userName: 'dinesh', password: 'dinesh', userType: 'A'}];

    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(user));
  }
  
}
