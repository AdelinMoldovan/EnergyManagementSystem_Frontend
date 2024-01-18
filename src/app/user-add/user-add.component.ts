import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  errors: any = [];

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
          //this.router.navigate(['/client-page']);
          alert(res.message);
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
}
