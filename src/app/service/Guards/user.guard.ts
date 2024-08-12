import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../apis/loginApi/login.service';

export const UserGuard: CanActivateFn = (route, state) => {
  const loginSercive = inject(LoginService);
  const snack = inject(MatSnackBar);
  const router = inject(Router);
  if (loginSercive.isLoggedIn() && loginSercive.getUserRole() == 'NORMAL') {
    return true;
  } else {
    snack.open('You are not authorized to access this page', 'Ok', {
      duration: 5000,
    });
    router.navigate(['/']);
    return false;
  }
};
