import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../../service/apis/questionApi/question.service';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-pre-exam-interface',
  templateUrl: './pre-exam-interface.component.html',
  styleUrl: './pre-exam-interface.component.css'
})
export class PreExamInterfaceComponent implements OnInit {
  constructor(
    private _quiz: QuizService,
    private _question: QuestionService,
    private _route: ActivatedRoute
  ) {}

  qid: any = null;

  title: any = null;

  quiz: any = {};

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.title = params['title'];
      // console.log(this.qid);
      this._quiz.getQuiz(this.qid).subscribe((data) => {
        this.quiz = data;
        // console.log(this.quiz);
      });
    });
  }
}
