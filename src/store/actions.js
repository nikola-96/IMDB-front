import movieService from "../services/MovieService";
import authService from "../services/AuthService";

export default {
  async startFetchMovies({ commit }) {
    const response = await movieService.fetchAllMovies();
    commit("SET_MOVIES", response.data);
  },
  async startRegisterUser({ commit }, user) {
    try {
      await authService.register(user);
    } catch (error) {
      commit("SET_ERRORS", error);
    }
  },
  async startLoginUser({ commit }, user) {
    try {
      await authService.login(user);
    } catch (error) {
      commit("SET_ERRORS", error);
    }
  },
};
