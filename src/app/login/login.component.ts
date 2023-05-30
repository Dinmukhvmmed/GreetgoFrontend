import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private http: HttpClient, private router: Router) {
  }


  login() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/login', this.loginRequest, { headers }).subscribe(
      () => {
        console.log('Authenticated');
        this.router.navigate(['/']);
      },
      () => {
        console.log('Authentication failed');
      }
    );
  }
}

class LoginRequest {
  username: string = '';
  password: string = '';
}
