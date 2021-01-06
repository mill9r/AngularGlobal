import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalstorageHelperService} from '../../../../shared/services/localstorage-helper/localstorage-helper.service';
import {localStorageKeys} from '../../../../shared/constants/localStorageKeys';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localstorageHelperService: LocalstorageHelperService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestCopy: any;
    if (request.url.includes('courses')) {
      requestCopy = request.clone({
        setHeaders: {
          Authorization: `${this.localstorageHelperService.get(localStorageKeys.token)}`
        }
      });
      return next.handle(requestCopy);
    }
    return next.handle(request);
  }
}
