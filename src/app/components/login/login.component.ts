import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../service/apis/loginApi/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private loginService: LoginService
  ) {}

  username: string = '';
  password: string = '';

  ngOnInit() {}

  login(): void {
    if (this.username == '' || this.password == '') {
      this.snack.open('Please enter username and password!', 'OK', {
        duration: 3000,
      });
    } else {
      this.loginService.generateToken(this.username, this.password).subscribe(
        (data: any) => {
          // console.log(data);
          this.loginService.login(data.token);
          this.loginService.getCurrentUser().subscribe(
            (data: any) => {
              // console.log(data);
              this.loginService.setUser(data);
              this.snack.open('Login Successful!', 'OK', {
                duration: 3000,
              });
              if (this.loginService.getUserRole() == 'ADMIN') {
                this.router.navigate(['admin/dashboard']);
                this.loginService.loginStatusSubject.next(true);
              } else {
                this.router.navigate(['user/dashboard/']);
                this.loginService.loginStatusSubject.next(true);
              }
            },
            (error: HttpErrorResponse) => {
              console.log(error);
              const msg = error.error.error || 'An error occurred!';
              this.snack.open(msg, 'OK', {
                duration: 3000,
              });
            }
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          const msg = error.error.error || 'An error occurred!';
          this.snack.open(msg, 'OK', {
            duration: 3000,
          });
        }
      );
    }
  }

}
