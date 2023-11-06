import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent {

  user!: any;
  userId!: any;

  errors: any = []


  constructor(private route:  ActivatedRoute, private userService: UserService) {}
  ngOnInit(){

    this.userId = this.route.snapshot.paramMap.get('id');
    //alert();

    this.userService.getUser(this.userId).subscribe((res )=>{
      console.log(res)
      this.user = res.user
    });
  }

  updateClient( ){

  }
}
