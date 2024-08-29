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
  toggle = false;
  user: any = null;

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.loginService.getUser();
    }
  }

  toggleMenu(e: any) {
    console.log('toggle');
    console.log(this.toggle);
    this.toggle = !this.toggle;
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
