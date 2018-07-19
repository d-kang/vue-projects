import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Markdown from "./views/Markdown.vue";
import Castle from "./views/Castle.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/markdown-notebook",
      name: "markdown",
      component: Markdown
    },
    {
      path: "/castle-duel-game",
      name: "castle",
      component: Castle
    }
  ]
});
