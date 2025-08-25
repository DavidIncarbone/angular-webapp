import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  url: string = 'https://angular-webapp-2cdf2-default-rtdb.europe-west1.firebasedatabase.app/data';

  constructor(private http: HttpClient, private authService: AuthService) {}

  insertData(url: string, body: {}) {
    return this.http.post(`${url}.json?auth=${this.authService.user?.token}`, body);
  }

  getData(url: string) {
    return this.http.get(`${url}.json?auth=${this.authService.user?.token}`);
  }

  patchData(url: string, id: string | undefined, body: {}) {
    return this.http.patch(`${url}/${id}.json?auth=${this.authService.user?.token}`, body);
  }

  deleteData(url: string, id: string | undefined) {
    return this.http.delete(`${url}/${id}.json?auth=${this.authService.user?.token}`);
  }
}
