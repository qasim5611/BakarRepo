import i18next from 'i18next';
import { en } from './en';
import { kr } from './kr';

i18next.init({
  lng: localStorage.getItem('lang'),
  debug: true,
  fallbackLng: ['en','kr'],
  resources: {
    en: en,
    kr: kr
  }
}, (err, t) => {
  if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});
// initialized and ready to go!
export default i18next;