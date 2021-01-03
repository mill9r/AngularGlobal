import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, from, of} from 'rxjs';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {map, mergeMap} from 'rxjs/operators';
import {User, UserLogin} from '../../../../shared/models';
import {LocalstorageHelperService} from '../../../../shared/services/localstorage-helper/localstorage-helper.service';
import {localStorageKeys} from '../../../../shared/constants/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo: BehaviorSubject<User> = new BehaviorSubject(null);
  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userKey = 'user';
  private readonly API_AUTH_LOGIN = `${environment.API_URL}/auth/login`;
  private readonly API_AUTH_USERINFO = `${environment.API_URL}/auth/userinfo`;

  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorageHelper: LocalstorageHelperService,
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
        mergeMap(token => this.http.post<User>(this.API_AUTH_USERINFO, {token})),
  )
      .subscribe((data) => {
        this.userInfo.next(data);
        this.isAuthenticated.next(true);
        this.router.navigateByUrl('/courses');
      });
  }

  public logout(): void{
    this.localStorageHelper.reset(localStorageKeys.token);
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/');
  }

  public getUserInfo(): string {
    return localStorage.getItem(JSON.parse(this.userKey));
  }
}
