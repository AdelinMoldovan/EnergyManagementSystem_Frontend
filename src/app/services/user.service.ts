import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

export interface UserResponse{
    user: any;
    "id": number
    "username": string
    "email": string
    "password" : string
}
export interface UserEditRespose{
    status: Number,
    user: UserResponse

}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor( private httpClient: HttpClient) {}

  saveUser(inputData: object){

    //console.log(inputData);
    return this.httpClient.post('http://localhost:8080/api/users', inputData);
  }

  getUsers(){
    return this.httpClient.get('http://localhost:8080/api/users');

  } 
  
  getUser(userId: bigint){
    return this.httpClient.get<UserResponse>('http://localhost:8080/api/users/${userId}');
  }

  deleteUser(user: User) {
    const index = this.users.findIndex((u) => u.userId === user.userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  
}
