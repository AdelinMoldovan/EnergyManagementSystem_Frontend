import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

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

  constructor( private httpClient: HttpClient) {}

  saveUser(inputData: object){

    console.log(inputData);
    return this.httpClient.post('http://localhost:8080/api/users', inputData);
  }

  getUsers(){
    return this.httpClient.get<UserResponseType>('http://localhost:8080/api/users');

  } 
  
  getUser(userId: bigint){
    return this.httpClient.get<UserResponse>(`http://localhost:8080/api/users/${userId}`);
  }

  updateUser(inputData: object, userId: number) {
    return this.httpClient.put(`http://localhost:8080/api/users/${userId}`, inputData);
  }


  destroyUser(userId: Number){
    return this.httpClient.delete(`http://localhost:8080/api/users/${userId}`)
  }

  
}
