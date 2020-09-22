export default {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  SET_SINGLE_MOVIE(state, movie) {
    state.movie = movie;
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
  SET_TERM(state, term) {
    state.term = term;
  },
  SET_GENRES(state, genres) {
    state.genres = genres;
  },
  SET_CHOSEN_GENRE(state, genre) {
    state.genre = genre;
  },
};
