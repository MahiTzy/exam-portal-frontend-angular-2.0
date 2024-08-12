import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/admin-dashboard/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/admin-dashboard/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/admin-dashboard/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin/admin-dashboard/admin-home/admin-home.component';
import { AttemptsComponent } from './pages/admin/admin-dashboard/attempts/attempts.component';
import { CategoriesComponent } from './pages/admin/admin-dashboard/categories/categories.component';
import { QuestionsComponent } from './pages/admin/admin-dashboard/questions/questions.component';
import { QuizzesComponent } from './pages/admin/admin-dashboard/quizzes/quizzes.component';
import { UpdateCategoryComponent } from './pages/admin/admin-dashboard/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/admin-dashboard/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/admin-dashboard/update-quiz/update-quiz.component';
import { ExamComponent } from './pages/exam/exam.component';
import { StartExamComponent } from './pages/exam/start-exam/start-exam.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AllQuizzessComponent } from './pages/user/user-dashboard/all-quizzess/all-quizzess.component';
import { PreExamInterfaceComponent } from './pages/user/user-dashboard/pre-exam-interface/pre-exam-interface.component';
import { QuizCategoriesComponent } from './pages/user/user-dashboard/quiz-categories/quiz-categories.component';
import { ShowQuizzessComponent } from './pages/user/user-dashboard/show-quizzess/show-quizzess.component';
import { SubmissionsComponent } from './pages/user/user-dashboard/submissions/submissions.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/user/user-dashboard/user-home/user-home.component';
import { AdminGuard } from './service/Guards/admin.guard';
import { rootGuard } from './service/Guards/root.guard';
import { UserGuard } from './service/Guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    canActivate: [rootGuard],
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: '',
        component: UserHomeComponent,
        title: 'Home',
        data: { title : 'Home' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        data: { title : 'Profile' },
      },
      {
        path: 'categories',
        component: QuizCategoriesComponent,
        title: 'Quiz Categories',
        data: { title : 'Quiz Categories' },
      },
      {
        path: 'quizzes/:cid/:title',
        component: ShowQuizzessComponent,
        title: 'Quizzes',
        data: { title : 'Quizzes' },
      },
      {
        path: 'all-quizzess',
        component: AllQuizzessComponent,
        title: 'All Quizzess',
        data: { title : 'All Quizzess' },
      },
      {
        path: 'start-exam/:qid/:title',
        component: PreExamInterfaceComponent,
        title: 'Start Exam',
        data: { title : 'Start Exam'}
      },
      {
        path: 'submissions',
        component: SubmissionsComponent,
        title: 'Submissions',
        data: { title : 'Submissions'}
      }
    ],
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
        title: 'Home',
        data: { title : 'Home' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        data: { title : 'Profile' },
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'Categories',
        data: { title : 'Categories' },
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        title: 'Add Category',
        data: { title : 'Add Category'}
      },
      {
        path: 'quizzes',
        component: QuizzesComponent,
        title: 'Quizzes',
        data: { title : 'Quizzes' },
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
        title: 'Add Quiz',
        data: { title : 'Add Quiz' },
      },
      {
        path: 'update-quiz/:qid',
        component: UpdateQuizComponent,
        title: 'Update Quiz',
        data: { title : 'Update Quiz' }
      },
      {
        path: 'update-category/:cid',
        component: UpdateCategoryComponent,
        title: 'Update Category',
        data: { title : 'Update Category'}
      },
      {
        path: 'questions/:qid/:title',
        component: QuestionsComponent,
        title: 'Questions',
        data: { title : 'Questions' }
      },
      {
        path: 'questions/:qid/:title/add-question',
        component: AddQuestionComponent,
        title: 'Add Question',
        data: { title : 'Add Question' }
      },
      {
        path: 'update-question/:quesId',
        component: UpdateQuestionComponent,
        title: 'Update Question',
        data: { title : 'Update Question' }
      },
      {
        path: 'attempts/:qid/:title',
        component: AttemptsComponent,
        title: 'Attempts',
        data: { title : 'Attempts' }
      }
    ]
  },
  {
    path: 'exam',
    component: ExamComponent,
    title: 'Exam',
    canActivate: [UserGuard],
    children: [
      {
        path: 'start-exam/:qid/:title',
        component: StartExamComponent,
        title: 'Start Exam',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
