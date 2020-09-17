import movieService from "../services/MovieService";

export default {
  async startFetchMovies({ commit }) {
    const response = await movieService.fetchAllMovies();
    console.log(response);
    commit("SET_MOVIES", response.data);
  },
};
