import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
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
import { AdminFooterComponent } from './pages/admin/components/admin-footer/admin-footer.component';
import { AdminNavComponent } from './pages/admin/components/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './pages/admin/components/admin-sidebar/admin-sidebar.component';
import { ExamComponent } from './pages/exam/exam.component';
import { StartExamComponent } from './pages/exam/start-exam/start-exam.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/user/components/sidebar/sidebar.component';
import { UserFooterComponent } from './pages/user/components/user-footer/user-footer.component';
import { UserNavComponent } from './pages/user/components/user-nav/user-nav.component';
import { AllQuizzessComponent } from './pages/user/user-dashboard/all-quizzess/all-quizzess.component';
import { PreExamInterfaceComponent } from './pages/user/user-dashboard/pre-exam-interface/pre-exam-interface.component';
import { QuizCategoriesComponent } from './pages/user/user-dashboard/quiz-categories/quiz-categories.component';
import { ShowQuizzessComponent } from './pages/user/user-dashboard/show-quizzess/show-quizzess.component';
import { SubmissionsComponent } from './pages/user/user-dashboard/submissions/submissions.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/user/user-dashboard/user-home/user-home.component';
import { authInterceptorProviders } from './service/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    UserNavComponent,
    UserFooterComponent,
    ContactComponent,
    HeaderComponent,
    AboutComponent,
    AdminNavComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SubmissionsComponent,
    AllQuizzessComponent,
    QuizCategoriesComponent,
    UserHomeComponent,
    ProfileComponent,
    ShowQuizzessComponent,
    PreExamInterfaceComponent,
    AdminHomeComponent,
    AddQuestionComponent,
    AddQuizComponent,
    AddCategoryComponent,
    AttemptsComponent,
    CategoriesComponent,
    QuestionsComponent,
    QuizzesComponent,
    UpdateCategoryComponent,
    UpdateQuestionComponent,
    UpdateQuizComponent,
    ExamComponent,
    StartExamComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
