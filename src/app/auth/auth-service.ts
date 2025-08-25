import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = true;
  user: User | null = null;
  APIkey: string = 'AIzaSyDtH 0kwndcSLiimZdwNe0EbL5Wusc-LJa8';
  loginURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
${this.APIkey}`;
  registerURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  register(body: {}) {
    return this.http.post(this.registerURL, body);
  }

  login(email: string, password: string) {
    return this.http.post(this.loginURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
  }
}
