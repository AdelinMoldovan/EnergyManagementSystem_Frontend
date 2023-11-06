import { Component } from '@angular/core';
import { UserResponse, UserService }  from 'src/app/services/user.service'
import { User } from '../models/user.model';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent {

  constructor(private userService: UserService){

  }

  users! : User[];

  ngOnInit() {
    this.getUserList();
    //console.log(this.users);
  }

  getUserList(){

    this.userService.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.users = res;
    });
  }
}
