import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {first} from 'rxjs/operators';

import {COMMON_LANGUAGES} from './constants/language.constants';
import {LocalstorageHelperService} from '../services/localstorage-helper/localstorage-helper.service';
import { AvailableLanguages } from './enums/available-languages.enum';

@Injectable({
  providedIn: 'root'
})
export class I18nTranslateService {
  private readonly key = 'language';

  constructor(
    private translateService: TranslateService,
    private localStorageHelperService: LocalstorageHelperService,
  ) { }

  public init(): void {
    this.setLanguage(this.getDefaultLanguage());
  }

  public setLanguage(language: string): void {
    this.translateService
      .use(language)
      .pipe(first())
      .subscribe(() => {
        this.translateService.setTranslation(language, COMMON_LANGUAGES[language], true);
        this.localStorageHelperService.set(this.key, language);
      });
  }

  private getDefaultLanguage(): string {
    return (this.localStorageHelperService.get(this.key) as string).replace(/"/g, '')
      || AvailableLanguages.En;
  }
}
