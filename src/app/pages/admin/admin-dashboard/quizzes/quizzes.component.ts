import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {

  constructor(private quiz:QuizService, private snack:MatSnackBar) { }

  quizzes:any = [];

  ngOnInit(): void {
      this.quiz.getQuizzes().subscribe((data)=>{
        // console.log(data);
        this.quizzes = data;
      });
  }

  deleteQuiz(id: any) {
    this.quiz.deleteQuiz(id).subscribe(
      (data) => {
        this.quizzes = this.quizzes.filter(
          (category: any) => category.qid != id
        );
        this.snack.open('Category deleted successfully', 'ok', {
          duration: 3000,
        });
      },
      (error) => {
        this.snack.open('Error deleting quiz', 'ok', {
          duration: 3000,
        });
      }
    );
  }
}
