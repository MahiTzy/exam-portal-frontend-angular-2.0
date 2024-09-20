import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private http:HttpClient) { }

  baseUrl: any = environment.baseUrl;

  getCategories(){
    return this.http.get(`${this.baseUrl}/category/`);
  }

  addCategory(category: any){
    return this.http.post(`${this.baseUrl}/category/`,category);
  }

  deleteCategory(id: any){
    return this.http.delete(`${this.baseUrl}/category/${id}`);
  }

  updateCategory(category:any){
    return this.http.put(`${this.baseUrl}/category/`,category);
  }

  getCategory(id:any){
    return this.http.get(`${this.baseUrl}/category/${id}`);
  }
}
