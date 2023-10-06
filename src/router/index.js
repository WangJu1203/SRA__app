import Profile from "../components/Info/index.vue";
import Request from "../components/Request/index.vue";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

export default [
  { path: "/profile", name: "profile", component: Profile },
  { path: "/request", name: "request", component: Request },
  { path: "/home", component: Home },
  { path: "/about", component: About },
];
