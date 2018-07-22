import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSidebar: false,
  },
  mutations: {
    flipSidebar(state) {
      state.showSidebar = !state.showSidebar;
      console.log('flippen sidebar');
    },
  },
  actions: {},
});
