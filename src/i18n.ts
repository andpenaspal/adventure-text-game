import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    lng: 'en',
    fallbackLng: 'en',
    ns: [],
    backend: {
      loadPath: '/src/assets/locales/{{lng}}/{{ns}}.json',
    },
  });
