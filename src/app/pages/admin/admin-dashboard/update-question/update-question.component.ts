import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../../service/apis/questionApi/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent implements OnInit {
  constructor(
    private _question: QuestionService,
    private _route: ActivatedRoute,
    private _snack: MatSnackBar,
    private _router: Router
  ) {}

  id: any = null;

  question: any = {};

  ngOnInit() {
    this._route.params.subscribe(
      (params) => {
        this.id = params['quesId'];
        console.log('id ' + this.id);
        this._question.getQuestion(this.id).subscribe((data) => {
          this.question = data;
        });
      },
      (error) => {
        this._snack.open('Error in fetching question', 'OK', {
          duration: 3000,
        });
      }
    );
  }

  updateQuestion() {
    this._question.updateQuestion(this.question).subscribe(
      (data) => {
        this._snack.open('Question updated', 'OK', { duration: 3000 });
        this._router.navigate([
          '/admin/dashboard/questions/' +
            this.question.quiz.qid +
            '/' +
            this.question.quiz.title,
        ]);
      },
      (error) => {
        this._snack.open('Error in updating question', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
