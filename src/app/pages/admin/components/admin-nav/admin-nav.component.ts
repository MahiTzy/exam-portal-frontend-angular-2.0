import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../../../service/apis/loginApi/login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  constructor(private loginService: LoginService, private router: Router, private _snack:MatSnackBar) {}

  isLoggedIn = false;
  user: any = null;

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.loginService.getUser();
      console.log(this.user);
    }
    // this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
    //   this.isLoggedIn = this.loginService.isLoggedIn();
    //   if (this.isLoggedIn) {
    //     this.user = this.loginService.getUser();
    //     console.log(this.user);
    //   }
    // });
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.user = null;
    this._snack.open('Logged Out Successfully !!', 'cancel', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
    this.router.navigate(['/']);
  }
}
