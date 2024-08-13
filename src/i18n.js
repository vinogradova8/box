import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Languagedetector from 'i18next-browser-languagedetector';
import { LOCALS } from './i18n/constants';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  eng: {
    translation: {
      Home: 'HomePage',
      Team: 'Team',
      Price: 'Price',
      News: 'News',
      Support: 'Support us',
      Contacts: 'Contacts',
    },
  },
  ukr: {
    translation: {
      Home: 'Домашня',
      Team: 'Команда',
      Price: 'Ціни',
      News: 'Новини',
      Support: 'Підтримати нас',
      Contacts: 'Кoнтакти',
    },
  },
  deu: {
    translation: {
      Home: 'Hause',
      News: 'Nachricht',
      Team: 'Team',
      FAQ: 'FAQ',
      Profile: 'Profil',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Languagedetector)
  .init({
    resources,
    fallbackLng: LOCALS.UK,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
