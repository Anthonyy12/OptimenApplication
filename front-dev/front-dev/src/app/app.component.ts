import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-dev';
  constructor(private authService: LoginService) {}

  get isLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}

