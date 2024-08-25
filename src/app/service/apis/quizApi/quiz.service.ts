import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  baseUrl: any = 'https://examapp-qd5p.onrender.com';

  getQuizzes() {
    return this.http.get(`${this.baseUrl}/quiz/`);
  }

  addQuiz(quiz: any) {
    return this.http.post(`${this.baseUrl}/quiz/`, quiz);
  }

  deleteQuiz(qid: any) {
    return this.http.delete(`${this.baseUrl}/quiz/${qid}`);
  }

  getQuiz(qid: any) {
    return this.http.get(`${this.baseUrl}/quiz/${qid}`);
  }

  updateQuiz(quiz: any) {
    return this.http.put(`${this.baseUrl}/quiz/`, quiz);
  }

  getQuizOfcategory(cid: any) {
    return this.http.get(`${this.baseUrl}/quiz/category/${cid}`);
  }

  getActiveQuizzes(){
    return this.http.get(`${this.baseUrl}/quiz/active`);
  }

  getActiveQuizzesOfCategory(cid: any){
    return this.http.get(`${this.baseUrl}/quiz/category/active/${cid}`);
  }
}
