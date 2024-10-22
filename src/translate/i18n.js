import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './en.json';
import vi from './vi.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    vi: { translation: vi }
  },
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: true
  }
});

function language() {
  const storageData = localStorage.getItem('language');
  if (!storageData) return 'vi'; // Ngôn ngữ mặc định
  return JSON.parse(storageData);
}

export default i18n;
