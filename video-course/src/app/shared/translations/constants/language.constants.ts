import en from '../../../../assets/translations/en.json';
import ru from '../../../../assets/translations/ru.json';

import {AvailableLanguages} from '../enums/available-languages.enum';

export type LanguageDictionary = { [key: string]: string | LanguageDictionary };

export const COMMON_LANGUAGES: LanguageDictionary = {
  [AvailableLanguages.En]: en,
  [AvailableLanguages.Ru]: ru,
};
