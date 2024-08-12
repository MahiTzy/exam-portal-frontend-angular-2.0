import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../../service/apis/categoryApi/category.service';
import { QuizService } from '../../../../service/apis/quizApi/quiz.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css',
})
export class AddQuizComponent implements OnInit {
  quiz: any = {
    title: '',
    description: '',
    maxMarks: null,
    numberOfQuestions: null,
    active: true,
    category: {
      cid: null,
    },
  };

  constructor(
    private quizService: QuizService,
    private snack: MatSnackBar,
    private categoryService: CategoryService
  ) {}

  categories: any = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        // console.log(data);
        this.categories = data;
      },
      (error) => {
        this.snack.open('Error fetching categories', 'ok', {
          duration: 3000,
        });
      }
    );
  }

  addQuiz() {
    this.quizService.addQuiz(this.quiz).subscribe(
      (data) => {
        this.snack.open('Succesfully added Quiz!', 'ok', {
          duration: 3000,
        });
        this.quiz = {
          title: '',
          description: '',
          maxMarks: null,
          numberOfQuestions: null,
          active: true,
          category: {
            cid: null,
          },
        };
      },
      (error) => {
        this.snack.open('Something went wrong!', 'ok', {
          duration: 3000,
        });
      }
    );
  }
}
