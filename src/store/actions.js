import movieService from "../services/MovieService";
import authService from "../services/AuthService";
import commentService from "../services/CommentService";

export default {
  async startFetchMovies({ commit }) {
    const response = await movieService.fetchAllMovies();
    commit("SET_MOVIES", response.data);
    commit("SET_TERM", "");
    commit("SET_CHOSEN_GENRE", undefined);
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
  async startFetchAllGenres({ commit }) {
    const response = await movieService.fetchAllGenres();
    commit("SET_GENRES", response.data);
  },
  async startFetchGenreMovie({ commit }, genre) {
    const response = await movieService.fetchGenreMovie(genre);
    commit("SET_MOVIES", response.data);
    commit("SET_CHOSEN_GENRE", genre);
  },
  async startFetchNextPageForGenre({ commit }, { genre, page }) {
    const response = await movieService.fetchNextPageForGenre(genre, page);
    commit("SET_MOVIES", response.data);
  },
  async startPostComment({ commit }, comment) {
    const response = await commentService.postComment(comment);
    commit("ADD_COMMENT", response.data);
  },
  async startFetchComents({ commit }, movie_id) {
    const response = await commentService.getComments(movie_id);
    commit("SET_COMMENTS", response.data);
  },
  async startFetchRelatedMovies({ commit }, genre_id) {
    const response = await movieService.fetchRelatedMovies(genre_id);
    commit("SET_RELATED_MOVIES", response.data);
  },
  async startFetchMoreComments({ commit }, { movie_id, page }) {
    const response = await commentService.fetchMoreComments(movie_id, page);
    commit("ADD_COMMENTS", response.data);
  },
  async startFetchGenreForSearhTerm({ commit }, { term, genre }) {
    const response = await movieService.fetchGenreForSearhTerm(term, genre);
    commit("SET_MOVIES", response.data);
    commit("SET_CHOSEN_GENRE", genre);
    commit("SET_TERM", term);
  },
};
