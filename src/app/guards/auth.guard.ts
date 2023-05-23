import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      // user is logged in, allow access to the route
      return true;
    } else {
      // user is not logged in, redirect to the login page
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
