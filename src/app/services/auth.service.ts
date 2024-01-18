import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';


  private role!: string;
  private userId!: number;

  constructor(private jwtService: JwtService) {}

  

  logout() {
    // Clear user session data
    sessionStorage.clear();
    localStorage.clear();
  }
  
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  createHeaders(): HttpHeaders {
    const token = this.getToken();

    // Add any other headers you might need
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }
  getUserNameFromToken(): string | null {
    const storedToken = this.getToken();
    if (storedToken) {
      const decodedToken = this.jwtService.decodeToken(storedToken);
      return decodedToken.username;
    }
    return null;
  }

  setRoleFromToken() {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      const decodedToken = this.jwtService.decodeToken(storedToken);
      this.role = decodedToken.role;
      this.userId = decodedToken.id;
    }
  }


  setRole(role: string) {
    this.role = role;
  }

  setUserId(userId: number){
    this.userId = userId;
  }

  isUser(): boolean {
    return this.role === 'ROLE_USER';
  }

  isAdmin(): boolean {
    return this.role === 'ROLE_ADMIN';
  }
  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  getUserROLE(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  getCurrentUserId(): number | null {
    const userId = sessionStorage.getItem('userId');
    return userId ? Number(userId) : 2;
  }


}

@Injectable()
export class UserAuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isUser()) {
      /*if(this.authService.isLoggedIn()){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }*/
      //return true; // User is allowed to access the route
      //this.router.navigate(['/user-page']);
      return true;
    } else {
      this.router.navigate(['']); // Redirect to the login page if the user's role is not suitable
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
      this.router.navigate(['']); // Redirect to the login page if the admin's role is not suitable
      return false;
    }
  }
}
