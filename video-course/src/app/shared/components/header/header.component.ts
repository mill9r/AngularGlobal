import { Component, OnInit, Input } from '@angular/core';

import {Icon} from '../../models';
import { icons } from 'src/app/material/constants/icons';
import {AuthService} from '../../../course/pages/auth/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icons: Icon = icons;
  public isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.isAuthenticated);
  }

}
