import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-all-quizzess',
  templateUrl: './all-quizzess.component.html',
  styleUrl: './all-quizzess.component.css'
})
export class AllQuizzessComponent implements OnInit {
  constructor(private _quiz:QuizService) { }

  quizzes: any = [];

  categories: any = [];

  ngOnInit() {
    this._quiz.getActiveQuizzes().subscribe((data)=>{
      this.quizzes = data;
    })
  }
}
