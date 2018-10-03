import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private http: HttpClient,
               public auth: AuthService 
              ) { 
    //dependency injection, creating an instance of HttpClient called http
      this.auth.handleAuthentication();
    }
}
