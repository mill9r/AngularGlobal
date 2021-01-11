import {Component, OnInit} from '@angular/core';

import {I18nTranslateService} from './shared/translations/i18n-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public constructor(private i18nTranslateService: I18nTranslateService) {}

  public ngOnInit(): void {
    this.i18nTranslateService.init();
  }
}
