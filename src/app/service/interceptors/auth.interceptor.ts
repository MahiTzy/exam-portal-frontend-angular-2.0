import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../apis/loginApi/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Intercepting request');
    const token = this.loginService.getToken();
    if (token != null) {
      // console.log('Token found in local storage');
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
