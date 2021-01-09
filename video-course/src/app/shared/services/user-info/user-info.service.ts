import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {User} from '../../models';
import {environment} from '../../../../environments/environment';
import {LocalstorageHelperService} from '../localstorage-helper/localstorage-helper.service';
import {localStorageKeys} from '../../constants/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public userInfo$: BehaviorSubject<User> = new BehaviorSubject(null);

  private readonly API_AUTH_USERINFO = `${environment.API_URL}/auth/userinfo`;

  constructor(
    private http: HttpClient,
    private localStorageHelperService: LocalstorageHelperService,
  ) {
    const token: string = this.localStorageHelperService.get(localStorageKeys.token);
    if (token) {
      this.getUserInfo(token.replace(/"|'/g, '')).subscribe(user => this.userInfo$.next(user));
    }
  }

  public getUserInfo(token: string): Observable<User> {
    return this.http.post<User>(
      this.API_AUTH_USERINFO,
      {token}
      );
  }
}
