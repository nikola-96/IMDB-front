import movieService from "../services/MovieService";
import authService from "../services/AuthService";

export default {
  async startFetchMovies({ commit }) {
    const response = await movieService.fetchAllMovies();
    commit("SET_MOVIES", response.data);
    commit("SET_TERM", "");
  },
  async startFetchNextPage({ commit }, url) {
    const response = await movieService.fetchNextPage(url);
    commit("SET_MOVIES", response.data);
  },

  async startFetchSingleMovie({ commit }, id) {
    const response = await movieService.fetchSingleMovie(id);
    commit("SET_SINGLE_MOVIE", response.data);
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
  async startSearchMovie({ commit }, term) {
    const response = await movieService.fetchSearchedMovies(term);
    commit("SET_MOVIES", response.data);
    commit("SET_TERM", term);
  },
  async startFetchNextPageForSearchedTerm({ commit }, { term, page }) {
    const response = await movieService.fetchNextPageForSearchedTerm(
      page,
      term
    );
    commit("SET_MOVIES", response.data);
  },
  async startIncrementLikes({ commit }, id) {
    await movieService.incrementNumberOfLikes(id);
    commit("CHANGE_NUMBER_OF_LIKES", id);
  },
};
