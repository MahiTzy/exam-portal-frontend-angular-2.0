import { LocationStrategy } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/apis/questionApi/question.service';
import { QuizResultService } from '../../../service/apis/quizApi/quiz-result.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css'],
})
export class StartExamComponent implements OnInit {
  private scriptElements: HTMLScriptElement[] = [];
  private styleElements: HTMLLinkElement[] = [];
  constructor(
    private _loc: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snack: MatSnackBar,
    private _quizResult: QuizResultService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    history.pushState(null, '', window.location.href);
    this._loc.onPopState(() => {
      history.pushState(null, '', window.location.href);
    });
  }

  quiz: any = {};
  questions: any = [];
  qid: any = null;
  title: any = null;
  result: any = [];
  evaluations: any = [];
  isSubmitted: any = false;
  timer: any = 0;
  isDisabled: any = true;

  ngOnInit() {
    // this.enterFullScreen();
    this.loadStyles([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    ]);

    // Load JS files dynamically
    this.loadScripts([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    ]);
    this._route.params.subscribe((params) => {
      this.qid = params['qid'];
      this.title = params['title'];
      this._question.getQuestionsOfQuizForExam(this.qid).subscribe(
        (data) => {
          this.questions = data;
          this.timer = this.questions.length * 2 * 60;
          // console.log(this.questions);
          this.quiz = this.questions[0].quiz;
          this.startTimer();
          // console.log(this.quiz);
        },
        (error) => {
          console.log(error);
          this._snack.open('Server Error!', 'ok', {
            duration: 3000,
          });
        }
      );
    });
  }

  enterFullScreen(): void {
    const elem = this.elementRef.nativeElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  loadStyles(sources: string[]): void {
    sources.forEach((href) => {
      const styleElement = this.renderer.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.href = href;
      this.renderer.appendChild(document.head, styleElement);
      this.styleElements.push(styleElement);
    });
  }

  loadScripts(sources: string[]): void {
    sources.forEach((src) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = src;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      this.renderer.appendChild(document.body, scriptElement);
      this.scriptElements.push(scriptElement);
    });
  }

  ngOnDestroy(): void {
    // Remove loaded scripts
    this.scriptElements.forEach((scriptElement) => {
      if (scriptElement) {
        this.renderer.removeChild(document.body, scriptElement);
      }
    });

    // Remove loaded styles
    this.styleElements.forEach((styleElement) => {
      if (styleElement) {
        this.renderer.removeChild(document.head, styleElement);
      }
    });
  }

  submitQuiz() {
    this.isSubmitted = true;

    // Submit the quiz to get evaluation results
    this._question.submitQuiz(this.questions).subscribe(
      (data) => {
        // Process the response and store the evaluation results
        this.result = data;
        // console.log(this.result);

        this.evaluations = this.result.evaluations;

        // Parse user data from localStorage
        const userString = localStorage.getItem('user');
        if (userString) {
          const user = JSON.parse(userString);
          const username = user.username;

          // Prepare the data to send to the backend for storing the quiz result
          const quizResult = {
            username: username,
            qid: this.qid,
            maxMarks: this.quiz.maxMarks,
            score: this.result.score,
            wrong: this.result.wrong,
            correct: this.result.correct,
            attempted: this.result.attempt,
            submittedAt: '',
          };

          // Submit the quiz result to the backend
          this._quizResult.submitQuizResult(quizResult).subscribe(
            (resultData) => {
              // console.log('Quiz result stored successfully', resultData);
              this._snack.open('Quiz Submitted Successfully!', 'ok', {
                duration: 3000,
              });
            },
            (resultError) => {
              console.log(resultError);
              this._snack.open('Error storing quiz result!', 'ok', {
                duration: 3000,
              });
            }
          );
        } else {
          console.error('User data not found in localStorage');
          this._snack.open('User data not found!', 'ok', {
            duration: 3000,
          });
        }
      },
      (error) => {
        console.log(error);
        this._snack.open('Server Error!', 'ok', {
          duration: 3000,
        });
      }
    );
  }

  // Timer
  startTimer() {
    let initialTimer = this.timer; // Store the initial timer value
    let interval = window.setInterval(() => {
      if (this.timer == 0) {
        clearInterval(interval);
        this.submitQuiz();
      }
      if (this.timer < initialTimer / 2) {
        // Compare with half of the initial value
        this.isDisabled = false;
      }
      this.timer--;
    }, 1000);
  }

  // format time
  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  print() {
    window.print();
  }

  // Prevent right click
  @HostListener('document:contextmenu', ['$event'])
  onDocumentContextmenuClick(event: MouseEvent) {
    event.preventDefault();
    return false;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    $event.returnValue = 'Are you sure you want to leave this page? Your progress may be lost.';
  }



}
