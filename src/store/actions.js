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
  async startFetchCurrentuser({ commit }) {
    const response = await authService.getCurrentUser();
    commit("SET_CURRENT_USER", response.data);
  },
  async startAddMovieToWatchList({ commit }, id) {
    await movieService.addMovieToWatchList(id);
    commit("");
  },
  async startDeleteMovieFromWatchList({ commit }, id) {
    await movieService.deleteMovieFromWatchList(id);
    commit("DELETE_MOVIE_FROM_LIST", id);
  },
  async startIncrementLikeOnMovies({ commit }, { id, singleMovie }) {
    try {
      await movieService.incrementLike(id);
      if (!singleMovie) {
        commit("INCREMENT_NUM_OF_LIKES_MOVIES", id);
      } else {
        commit("INCREMENT_NUM_OF_LIKES_ON_SINGLE_MOVIES");
      }
    } catch (error) {
      alert("You alredy vote for this movie");
    }
  },
  async startIncrementDislikeOnMovies({ commit }, { id, singleMovie }) {
    try {
      await movieService.incrementDislike(id);
      if (!singleMovie) {
        commit("INCREMENT_NUM_OF_DISLIKES_MOVIES", id);
      } else {
        commit("INCREMENT_NUM_OF_DISLIKES_ON_SINGLE_MOVIES");
      }
    } catch (error) {
      alert("You alredy vote for this movie");
    }
  },
  async fetchWatchList({ commit }) {
    const response = await movieService.fetchMoviesForWatchList();
    commit("SET_WATCH_LIST", response.data);
  },
  async startFetchMostRatedMovies({ commit }) {
    const response = await movieService.fetchMostRatedMovies();
    commit("SET_MOST_RATED_MOVIES", response.data);
  },
};
