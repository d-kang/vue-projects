import Vue from 'vue';
import Router from 'vue-router';
import Markdown from '@/views/Markdown.vue';
import Castle from '@/views/Castle.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'markdown',
      component: Markdown,
    },
    {
      path: '/markdown-notebook',
      name: 'markdown',
      component: Markdown,
    },
    {
      path: '/castle-duel-game',
      name: 'castle',
      component: Castle,
    },
  ],
});
