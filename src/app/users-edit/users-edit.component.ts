import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent {

  user: any = { 
    email: '',
    username: '', 
    password: '',
    role: '',
   };
  userId!: any;

  errors: any = []


  constructor(private route:  ActivatedRoute, private userService: UserService, private router: Router)  {}
  ngOnInit(){

    this.userId = this.route.snapshot.paramMap.get('id');
    //this.userId = '836355818090139'
    //alert();
    //console.log(this.userId);
    this.userService.getUser(this.userId).subscribe((res )=>{
      console.log(res)
      //console.log(res.email)
      //this.user = res.user
      this.user.username = res.username
      this.user.email = res.email
      this.user.password = res.password
      this.user.role = res.role
    });
  }

  updateUser( ){
    var inputData = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      role: this.user.role,
    }

    this.userService.updateUser(inputData, this.userId).subscribe({
      next: (res:any) =>{
        console.log(res);
        this.router.navigate(['/client-page']);
      },
      error: (err:any) =>{
        this.errors = err.error.errors;
      }
    });
  }


}
