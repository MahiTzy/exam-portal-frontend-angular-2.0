import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = environment.baseUrl;
  constructor(private http: HttpClient) {}
  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }
}
