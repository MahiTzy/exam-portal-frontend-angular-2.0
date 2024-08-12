import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../../service/apis/questionApi/question.service';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  qid: any = null;
  title: any = null;

  question: any = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: null,
    quiz: {
      qid: null,
    },
  };

  constructor(
    private _question: QuestionService,
    private _snack: MatSnackBar,
    private _quiz: QuizService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.title = params['title'];
      this.question.quiz.qid = this.qid;
    });
  }

  addQuestion() {
    this._question.addQuestion(this.question).subscribe(
      (data) => {
        this._snack.open('Question added', 'OK', { duration: 3000 });
        this._router.navigate(['/admin/dashboard/questions/' + this.qid + '/' + this.title]);
      },
      (error) => {
        this._snack.open('Error in adding question', 'OK', { duration: 3000 });
        console.log(error);
      }
    );
  }
}
