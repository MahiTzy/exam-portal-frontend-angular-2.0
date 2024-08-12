import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { QuizResultService } from '../../../../service/apis/quizApi/quiz-result.service';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {
  constructor(private _quizResult: QuizResultService, private _quiz:QuizService) {}

  quizResultsWithDetails: any[] = [];

  ngOnInit() {
    const userString = localStorage.getItem('user');
    // console.log(userString);
    if (userString) {
      const user = JSON.parse(userString);
      const username = user.username;
      // console.log(username);
      this._quizResult
        .getQuizResultForUser(username)
        .subscribe(
          (data:any) => {
            this.fetchQuizDetails(data);
            // console.log(this.quizResultsWithDetails);

          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
  fetchQuizDetails(quizResults: any[]) {
    const quizDetailsObservables = quizResults.map((quizResult) =>
      this._quiz.getQuiz(quizResult.qid).pipe(
        map((quizDetails) => ({ ...quizResult, quizDetails }))
      )
    );

    forkJoin(quizDetailsObservables).subscribe(
      (results) => {
        this.quizResultsWithDetails = results;
        // console.log(this.quizResultsWithDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

