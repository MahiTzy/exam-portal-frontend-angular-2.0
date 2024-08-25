import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = 'https://examapp-qd5p.onrender.com';
  constructor(private http: HttpClient) {}
  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }
}
