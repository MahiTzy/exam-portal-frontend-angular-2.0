import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private _http:HttpClient) { }

  baseUrl: any = 'https://examapp-qd5p.onrender.com';

  public submitQuizResult(quizResult:any){
    return this._http.post(`${this.baseUrl}/quiz-result/submit`,quizResult);
  }

  public getQuizResultForUser(username:any){
    return this._http.get(`${this.baseUrl}/quiz-result/${username}`);
  }

  public getQuizResultForAdmin(qid:any){
    return this._http.get(`${this.baseUrl}/quiz-result/quiz/${qid}`);
  }
}
