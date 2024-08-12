import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizResultService } from '../../../../service/apis/quizApi/quiz-result.service';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
})
export class AttemptsComponent implements OnInit {
  constructor(
    private _quizResult: QuizResultService,
    private _route: ActivatedRoute
  ) {}

  qid: any = null;

  title: any = null;

  quizAttempts: any = null;

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.title = params['title'];
      this._quizResult.getQuizResultForAdmin(this.qid).subscribe(
        (res) => {
          this.quizAttempts = res;
          console.log(this.quizAttempts);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
