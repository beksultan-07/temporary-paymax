import Vuetify from 'vuetify/lib';

import en from '../locales/en';
import ru from '../locales/ru';

export default new Vuetify({
  lang: {
    locales: { en, ru },
    current: 'en',
  }
});
