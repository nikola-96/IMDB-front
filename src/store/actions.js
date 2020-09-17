import movieService from "../services/MovieService";

export default {
  async startFetchMovies({ commit }) {
    const response = await movieService.fetchAllMovies();
    commit("SET_MOVIES", response.data);
  },
  async startFetchSingleMovie({ commit }, id) {
    const response = await movieService.fetchSingleMovie(id);
    commit("SET_SINGLE_MOVIE", response.data);
  },
};
