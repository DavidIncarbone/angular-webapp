import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  url: string = 'https://angular-webapp-2cdf2-default-rtdb.europe-west1.firebasedatabase.app/data';
  APIkey: string = 'AIzaSyDtH 0kwndcSLiimZdwNe0EbL5Wusc-LJa8';
  loginURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
${this.APIkey}`;
  registerURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key ${this.APIkey}`;

  constructor(private http: HttpClient, private authServie: AuthService) {}

  insertData(url: string, body: {}) {
    return this.http.post(`${url}.json`, body);
  }

  getData(url: string) {
    return this.http.get(`${url}.json`);
  }

  patchData(url: string, id: string | undefined, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body);
  }

  deleteData(url: string, id: string | undefined) {
    return this.http.delete(`${url}/${id}.json`);
  }
}
