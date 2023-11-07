import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from './LoginResponse';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{
  
  username: string = '';
  password: string = '';

  signupUsers: any[] = [];
  signUpObj:any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  onSignUp() {
    const { userName, email, password } = this.signUpObj;

    // Create an object with the user data
    const userData = {
      username: userName,
      email: email,
      password: password
    };

    this.http.post('http://localhost:8080/api/register', userData)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
  }
  


  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post<LoginResponse>('http://localhost:8080/api/login', body).subscribe(
      (response) => {
        console.log('Login successful:', response);
    
        // Set the user role in the AuthService based on the response
        this.authService.setRole(response.role);
    
        // Redirect based on the user's role
        if (this.authService.isUser()) {
          this.router.navigate(['/user-page']);
        } else if (this.authService.isAdmin()) {
          this.router.navigate(['/client-page']);
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
  

}
