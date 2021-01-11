import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {LocalstorageHelperService} from '../../../../shared/services/localstorage-helper/localstorage-helper.service';
import {localStorageKeys} from '../../../../shared/constants/localStorageKeys';
import {SpinnerService} from '../../../../shared/services/spinner/spinner.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localstorageHelperService: LocalstorageHelperService,
    private spinnerService: SpinnerService,
    ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestCopy: any;
    this.spinnerService.onRequestStarted();
    if (request.url.includes('courses')) {
      requestCopy = request.clone({
        setHeaders: {
          Authorization: `${this.localstorageHelperService.get(localStorageKeys.token)}`
        }
      });
      return next.handle(requestCopy)
        .pipe(finalize(() => this.spinnerService.onRequestStopped()));
    }
    return next.handle(request)
      .pipe(finalize(() => this.spinnerService.onRequestStopped()));
  }
}
