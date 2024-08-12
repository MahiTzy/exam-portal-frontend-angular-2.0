import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../apis/loginApi/login.service';

export const rootGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    if (loginService.getUserRole() === 'ADMIN') {
      router.navigate(['/admin/dashboard']);
      return false;
    } else if (loginService.getUserRole() === 'NORMAL') {
      router.navigate(['/user/dashboard']);
      return false;
    }
  }

  return true;
};
