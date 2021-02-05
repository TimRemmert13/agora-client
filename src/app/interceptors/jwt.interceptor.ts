import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth0: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.auth0.user$) {
      // set access token fron auth0 to authorization header
      let token = '';
      this.auth0.getAccessTokenSilently().subscribe((t) => (token = t));
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
