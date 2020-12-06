import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userKey = 'user';

  constructor(private router: Router) {}

  public loginUser(username: string, password: string): void {
    this.isLoggedIn.next(true);
    localStorage.setItem(
      this.userKey,
      JSON.stringify({
      username,
      password
      })
    );
    this.router.navigateByUrl('/courses');
  }

  public logout(): void{
    localStorage.setItem(this.userKey, '');
    this.router.navigateByUrl('/');
  }

  public isAuthenticated(): Observable<boolean>{
    return this.isLoggedIn;
  }

  public getUserInfo(): string {
    return localStorage.getItem(JSON.parse(this.userKey));
  }
}
