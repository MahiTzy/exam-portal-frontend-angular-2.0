import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../service/apis/categoryApi/category.service';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private categoryService: CategoryService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  qid: any = null;

  quiz: any = {};

  quizCategory: any = {};

  categories: any = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.quizService.getQuiz(this.qid).subscribe((data: any) => {
        console.log(data);
        this.quiz = data;
        this.quizCategory = this.quiz.category;
        console.log(this.quiz);
        this.categoryService.getCategories().subscribe((data) => {
          console.log(data);
          this.categories = data;
        });
      });
    });
  }

  updateQuiz(quiz: any) {
    this.quizService.updateQuiz(quiz).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Quiz Updated Successfully!', 'ok', {
          duration: 3000,
        });
        this.router.navigate(['/admin-dashboard/quizzes']);
      },
      (error) => {
        this.snack.open('Something went wrong!', 'ok', {
          duration: 3000,
        });
      }
    );
  }
}
