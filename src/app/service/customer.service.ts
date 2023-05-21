import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interface/customer';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customer'
  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<any>(`${this.baseUrl}/create`, customer);
  }

  listCustomers(limit: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/list?limit=${limit}`);
  }

  getCustomer(customerID: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/get/${customerID}`);
  }

  updateCustomer(customerID: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/update/${customerID}`, customer);
  }

  deleteCustomer(customerID: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${customerID}`);
  }

}
