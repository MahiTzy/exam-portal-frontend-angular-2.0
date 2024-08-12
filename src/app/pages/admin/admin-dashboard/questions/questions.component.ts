import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../../service/apis/questionApi/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private snack: MatSnackBar
  ) {}

  qid = null;
  title = null;
  questions: any = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.title = params['title'];
      this.questionService.getQuestionsOfQuiz(this.qid).subscribe(
        (data: any) => {
          this.questions = data;
          // console.log(this.questions);
        },
        (error) => {
          this.snack.open('Error in loading questions', 'OK');
        }
      );
    });
  }

  deleteQuestion(quesId:any){
    this.questionService.deleteQuestion(quesId).subscribe((data)=>{
      this.questions = this.questions.filter((question: any) => question.quesId != quesId);
      this.snack.open('Question deleted successfully','ok',{
        duration:3000
      })
    },(error)=>{
      this.snack.open('Something went wrong!','ok',{
        duration:3000
      })
    })
  }
}
