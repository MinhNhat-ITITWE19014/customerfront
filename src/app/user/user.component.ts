import { LoginService } from './../service/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  constructor(private LoginService: LoginService, private router: Router){}
  faCartShopping= faCartShopping;

  logout():void{
    this.LoginService.logout();
    this.router.navigateByUrl('/login')
  }

  // getCustomerData(): void {
  //   // Call the appropriate method from your customer service to fetch customer data
  //   this.CustomerService.getCustomer().subscribe(
  //     (response: any) => {
  //       // Assign the response data to the customer variable
  //       this.customer = response;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

}
