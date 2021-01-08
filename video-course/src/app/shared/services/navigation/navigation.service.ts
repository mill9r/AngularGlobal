import { Injectable } from '@angular/core';

import {UserInfoService} from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private userInfo: UserInfoService,
  ){}

  public getUrl(segments: string | string[] = []): string {
    const convertSegment = Array.isArray(segments) ? segments : [segments];

    return ''.concat(...[
      '/user/',
      `${this.userInfo.userInfo$.getValue().id}`,
      ...convertSegment,
    ]);
  }
}
