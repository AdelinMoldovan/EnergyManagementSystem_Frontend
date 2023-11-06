import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private router: Router) {}

  logout() {
    // Clear user session data (e.g., remove tokens, user info)
    // Perform any necessary cleanup

    // Navigate to the login page (you should define the login route in your app-routing.module.ts)
    this.router.navigate(['/login']);
  }

}
