import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  customerLogin(email: string, password: string) {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any>(this.loginUrl, body.toString(), { headers: headers }).pipe(
      tap(response => {
        console.log(response);
        console.log(localStorage);
        // store the token in localStorage
        localStorage.setItem('token', response.token);
      }),
      catchError(error => {
        console.error('Login Error:', error);
        throw error; // rethrow the error to propagate it to the login component
      })
    );
  }
  logout(): void {
    // remove the token if logout() is called
    localStorage.removeItem('token');
  }
  isLoggedIn(): boolean {
    // check if the token exists in localStorage or any other storage method
    return !!localStorage.getItem('token');
  }
}
