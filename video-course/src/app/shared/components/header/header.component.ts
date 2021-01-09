import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';

import {Icon, User} from '../../models';
import { icons } from 'src/app/material/constants/icons';
import {AuthService} from '../../../course/pages/auth/services/auth.service';
import {UserInfoService} from '../../services/user-info/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icons: Icon = icons;
  public user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private userInfo: UserInfoService,
  ) { }

  public ngOnInit(): void {
    this.user$ = this.userInfo.userInfo$;
  }

  public logout(): void {
    this.authService.logout();
  }

}
