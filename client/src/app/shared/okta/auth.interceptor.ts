import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {OktaAuthService} from '@okta/okta-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oktaAuth: OktaAuthService) {  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('localhost') > -1) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.oktaAuth.getAccessToken().accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
