import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../interface/shoppingcart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private baseUrl = 'http://localhost:8080/cart';
  constructor(private http: HttpClient) { }

  createCart(cartItem: ShoppingCart): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, cartItem);
  }
  getShoppingCart(limit: number): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.baseUrl}/list?limit=${limit}`);
  }
  getCartItemsById(cartID: number): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`${this.baseUrl}/items/${cartID}`);
  }

  deleteCart(cartID: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${cartID}`);
  }
}
