// Styles
/* import "@mdi/font/css/materialdesignicons.css";
 */ // eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-free/css/all.css";
// eslint-disable-next-line import/no-unresolved
import "vuetify/styles";
import { aliases, fa } from "vuetify/lib/iconsets/fa";
import { mdi } from "vuetify/lib/iconsets/mdi";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
