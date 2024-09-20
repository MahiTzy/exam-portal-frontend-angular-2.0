import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  baseUrl: any = process.env['BASE_URL'];

  // get questions by quiz id
  public getQuestionsOfQuiz(qid: any){
    return this.http.get(`${this.baseUrl}/question/quiz/all/${qid}`);
  }

  // get questions by quiz id for exam
  public getQuestionsOfQuizForExam(qid:any){
    return this.http.get(`${this.baseUrl}/question/quiz/${qid}`);
  }

  // delete question
  deleteQuestion(quesId: any){
    return this.http.delete(`${this.baseUrl}/question/${quesId}`);
  }

  // add question
  addQuestion(question: any){
    return this.http.post(`${this.baseUrl}/question/`, question);
  }

  // update question
  updateQuestion(question: any){
    return this.http.put(`${this.baseUrl}/question/`, question);
  }

  // get question by id
  getQuestion(quesId: any){
    return this.http.get(`${this.baseUrl}/question/${quesId}`);
  }

  // evaluate quiz
  submitQuiz(questions: any){
    return this.http.post(`${this.baseUrl}/question/quiz/evaluate`, questions);
  }
}
