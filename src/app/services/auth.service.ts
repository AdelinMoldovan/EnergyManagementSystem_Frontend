import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role!: string;

  setRole(role: string) {
    this.role = role;
  }

  isUser(): boolean {
    return this.role === 'ROLE_USER';
  }

  isAdmin(): boolean {
    return this.role === 'ROLE_ADMIN';
  }
}
@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isUser()) {
      //return true; // User is allowed to access the route
      this.router.navigate(['/user-page']);
      return false;
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if the user's role is not suitable
      return false;
    }
  }
}


@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin()) {
      return true; // Admin is allowed to access the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if the admin's role is not suitable
      return false;
    }
  }
}
