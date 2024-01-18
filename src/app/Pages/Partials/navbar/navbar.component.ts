import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements DoCheck{
  ismenurequired = false;
  
  
  constructor(private router: Router, private authService: AuthService){
  
  }
  ngDoCheck(): void {
    let currenturl = this.router.url;
    if(currenturl!=''){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }
  }

  logout() {
    // Clear user session data (e.g., remove tokens, user info)
    // Perform any necessary cleanup
    //this.authService.logout();
    this.authService.logout();

    this.router.navigate(['']);
  }

}
