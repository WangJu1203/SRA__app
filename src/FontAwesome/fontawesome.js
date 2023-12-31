import Vue from "vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faStar);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
