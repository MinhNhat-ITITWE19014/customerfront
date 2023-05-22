import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string = '';
  email: string ='';
  password: string='';


  constructor(private loginService: LoginService, private router: Router) { }

  login(loginForm: NgForm) {
    const email= this.email;
    const password = this.password;

    this.loginService.customerLogin(email, password)
      .subscribe(
        (response:any) => {
          // Login successful
          this.errorMessage = '';
          // Redirect or perform any other action
          this.router.navigateByUrl('/home')
        },
        error => {
          // Login failed
          this.errorMessage = 'Invalid email or password.';
        }
      );
  }
}
