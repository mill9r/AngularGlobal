import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';

import {environment} from '../../../../../environments/environment';
import {UserLogin} from '../../../../shared/models';
import {LocalstorageHelperService} from '../../../../shared/services/localstorage-helper/localstorage-helper.service';
import {localStorageKeys} from '../../../../shared/constants/localStorageKeys';
import {UserInfoService} from '../../../../shared/services/user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_AUTH_LOGIN = `${environment.API_URL}/auth/login`;

  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorageHelper: LocalstorageHelperService,
    private userInfo: UserInfoService,
    ) {}

  public loginUser(login: string, password: string): void {

    this.http.post<UserLogin>(this.API_AUTH_LOGIN, {
      login,
      password,
    })
      .pipe(
        map(data => {
          this.localStorageHelper.set(localStorageKeys.token, data.token);
          return data.token;
        }),
        mergeMap(token => this.userInfo.getUserInfo(token)),
  )
      .subscribe((data) => {
        this.userInfo.userInfo$.next(data);
        this.router.navigateByUrl(`/user/${data.id}/courses`);
      });
  }

  public logout(): void{
    this.localStorageHelper.reset(localStorageKeys.token);
    this.router.navigateByUrl('/');
  }
}
