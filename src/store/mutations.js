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
  ADD_COMMENT(state, comment) {
    state.movie.comments = [...state.movie.comments, comment];
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments;
  },
};
