import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {UserInfoService} from '../../../../shared/services/user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userInfoService: UserInfoService,
    ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
     return this.userInfoService.userInfo$
       .pipe(
         filter(user => !!user),
         map(user => {
           console.log('guard',user)
           return !!user
         })
       );
  }

}
