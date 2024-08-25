import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  baseUrl: any = 'https://examapp-qd5p.onrender.com';

  getCurrentUser() {
    return this.http.get(`${this.baseUrl}/current-user`);
  }

  generateToken(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/generate-token`, {username, password});
  }

  login(token: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
      // this.loginStatusSubject.next(true);
    }
  }

  isLoggedIn() {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      return !(token === undefined || token === '' || token === null);
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined') {
      // console.log('Logging out, current localStorage items:', localStorage);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // console.log('Logged out, current localStorage items:', localStorage);
    }
    return true;
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  setUser(user: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  getUser() {
    if (typeof window !== 'undefined') {
      let userStr = localStorage.getItem('user');
      if (userStr != null) {
        return JSON.parse(userStr);
      } else {
        this.logout();
        return null;
      }
    }
    return null;
  }

  getUserRole() {
    let user = this.getUser();
    return user?.authorities[0].authority;
  }
}
