import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
    movies: [],
    movie: {},
  },
  getters,
  mutations,
  actions,
  modules: {},
});
