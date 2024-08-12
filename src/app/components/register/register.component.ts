import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../../service/apis/regApi/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private api: ApiService, private snack: MatSnackBar, private _router:Router) {}
  user = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  };

  resetFormData() {
    this.user = {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
    };
  }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null || this.user.email == '' || this.user.email == null || this.user.password == '' || this.user.password == null || this.user.firstName == '' || this.user.firstName == null || this.user.lastName == '' || this.user.lastName == null || this.user.phone == '' || this.user.phone == null) {
      this.snack.open('Fields are required !!', 'cancel', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
      return;
    }
    this.api.createUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Registration Successfull !!', 'cancel', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
        this.resetFormData();
        this._router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        const msg = error.error.error || 'An error occurred!';
        this.snack.open(msg, 'cancel', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
      }
    );
  }
}
