import { Component } from '@angular/core';
import { UserService, UserResponse } from '../services/user.service';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
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

  deleteUser(event: any, userId: Number){
    if(confirm("Are you sure you want to delete this user ?")){
      
      event.target.innerText ="Deleting...";
       
      this.userService.destroyUser(userId).subscribe((res:any) => {
        this.getUserList();
        
      });
    }

  }
}
