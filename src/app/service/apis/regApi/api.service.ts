import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = process.env['BASE_URL'];
  constructor(private http: HttpClient) {}
  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }
}
