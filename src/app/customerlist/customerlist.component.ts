import { Component, OnInit } from '@angular/core';
import { Customer } from '../interface/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.listCustomers(10)
      .subscribe(
        customers => {
          this.customers = customers;
        },
        error => {
          // Handle error
        }
      );
  }
}
