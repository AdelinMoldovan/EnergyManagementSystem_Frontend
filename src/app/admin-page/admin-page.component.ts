import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent{
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  errors: any = []

  /*userList: User[] = [];
  newUser: User = new User();
  editedUser: User = new User();
  editMode = false;*/

  constructor(private userService: UserService, private router: Router) {}

  saveUser(){
    var inputData = {
      email: this.email,
      username: this.username,
      password: this.password,
      role: this.role
    }
   
    this.userService.saveUser(inputData).subscribe({
      next:(res: any) => {
          console.log(res, 'response');
          this.router.navigate(['/client-page']);
          //alert(res.message);
          this.email = '';
          this.username = '';
          this.password = '';
          this.role = '';
      },
      error: (err: any) =>{
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
    }
  });

  } 


 /* ngOnInit() {
    this.loadUserList();
  }

  loadUserList() {
    this.userList = this.userService.getUserList();
  }

  addUser() {
    this.userService.addUser(this.newUser);
    this.newUser = new User(); // Clear the input fields
    this.loadUserList();
  }

  editUser(user: User) {
    this.editMode = true;
    this.editedUser = { ...user }; // Create a copy of the user to edit
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editMode = false;
    this.editedUser = new User(); // Clear the edit form
    this.loadUserList();
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
    this.loadUserList();
  }*/
}
