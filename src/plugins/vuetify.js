import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#f64c72',
        secondary: '#2f2fa2'
      },
      dark: {
        primary: '#f64c72',
        secondary: colors.deepPurple.lighten2,
        background: '#181a1b'
      },
    },
  },
});
