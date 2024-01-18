import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
export interface UserResponse{
    user: any;
    "id": number
    "username": string
    "email": string
    "password" : string
    "role": string
}
export interface UserEditRespose{
    status: Number,
    user: UserResponse

}
export interface UserResponseType{
  status: Number,
  users: UserResponse[]
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor(private httpClient: HttpClient, private authService: AuthService) {}


  saveUser(inputData: object): Observable<any>  {
    const headers = this.authService.createHeaders();
    console.log(inputData);
    return this.httpClient.post('http://localhost:8080/api/users', inputData, { headers });
  }

  getUsers(): Observable<any> {
    const headers = this.authService.createHeaders();
    return this.httpClient.get<UserResponseType>('http://localhost:8080/api/users', { headers });
  }

  getUser(userId: number): Observable<any>  {
    const headers = this.authService.createHeaders();
    return this.httpClient.get<UserResponse>(`http://localhost:8080/api/users/${userId}`, { headers });
  }

  updateUser(inputData: object, userId: number) {
    const headers = this.authService.createHeaders();
    return this.httpClient.put(`http://localhost:8080/api/users/${userId}`, inputData, { headers });
  }

  destroyUser(userId: Number) {
    const headers = this.authService.createHeaders();
    return this.httpClient.delete(`http://localhost:8080/api/users/${userId}`, { headers });
  }
}
