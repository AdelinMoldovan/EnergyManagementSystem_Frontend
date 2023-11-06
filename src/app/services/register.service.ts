import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  signUpObj:any = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}
 /* onSignUp() {
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
  }*/
  onSignUp(username: string, email: string, password: string) {
    const body = { username, email, password };
    return this.http.post('http://localhost:8080/api/register', body);
  }
}
