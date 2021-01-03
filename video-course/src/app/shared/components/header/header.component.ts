import { Component, OnInit, Input } from '@angular/core';

import {Icon, User} from '../../models';
import { icons } from 'src/app/material/constants/icons';
import {AuthService} from '../../../course/pages/auth/services/auth.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icons: Icon = icons;
  public user$: Observable<User>;
  public isAuthenticated$: Observable<any>;

  constructor(
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.user$ = this.authService.userInfo;

    this.user$.pipe(tap(data => console.log('user:', data)));
    this.isAuthenticated$ = this.authService.isAuthenticated;
  }

  public logout(): void {
    this.authService.logout();
  }

}
