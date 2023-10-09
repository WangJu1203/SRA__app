import Profile from "../views/Profile.vue";
import Request from "../views/Request.vue";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

export default [
  { path: "/profile", component: Profile },
  { path: "/request", component: Request },
  { path: "/home", component: Home },
  { path: "/about", component: About },
];
