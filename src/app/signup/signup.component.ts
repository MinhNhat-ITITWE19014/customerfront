import { FormGroup, NgForm } from '@angular/forms';
import { Customer } from '../interface/customer';
import { CustomerService } from './../service/customer.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errorMessage: string ='';
  customer: Customer = {
    userName: '',
    password: '',
    fullName: '',
    email: '',
    confirmPassword: '',


    address: {
      streetNum: '',
      streetName: '',
      ward: '',
      district: '',
      city: '',
      postalCode: ''
    }
  };

  constructor(private customerService: CustomerService, private router: Router) { }

  signup(signupForm: NgForm) {
    // check for confimation password and input password for matches
    const password = signupForm.form.controls['password'].value;
    const cPassword = signupForm.form.controls['cPassword'].value;
    if(password == cPassword){
      signupForm.form.controls['cPassword'].setErrors(null);
    }

    if(password != cPassword){
      signupForm.form.controls['cPassword'].setErrors({incorrect : true})
      return;
    }


    if (signupForm.invalid) {
      // Loop through each form control
      Object.keys(signupForm.controls).forEach(controlName => {
        const control = signupForm.controls[controlName];

        // Check if the control is invalid and has been touched or submitted
        if (control.invalid && (control.touched || signupForm.submitted)) {
            console.log(`${controlName} is required`);
          // Display error message or perform any other action
        }
      });

      return;
    }


    // Call the createCustomer method of the CustomerService
    this.customerService.createCustomer(this.customer)
      .subscribe(
        (response:any) => {
          if(response.Error){
            this.errorMessage = response.Error;
          }else {
          // Handle the success response
          console.log('Success customer request:', response);
          // Redirect to success result page or show a success message
          this.router.navigate(['/successpage']);
        }
      },
        error => {
          // Handle the error response
          console.error('Error creating customer:', error);
          // Show an error message to the user
        }
      );
  }
}
