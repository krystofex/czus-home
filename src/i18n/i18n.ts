import cs from './translations/cs.json';
import en from './translations/en.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    cs: {
        translation: cs,
    },
    en: {
        translation: en,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'cs',
    keySeparator: false,
    interpolation: { escapeValue: false },
});

export default i18n;
