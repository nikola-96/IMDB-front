export default {
  getAllMoviesFromState: (state) => state.movies,
  getSingleMovieFromState: (state) => state.movie,
  getErrorsFromState: (state) => state.errors,
  getTermFromState: (state) => state.term,
  getCommentsFromState: (state) => state.comments,
  getRelatedMoviesFromState: (state) => state.relatedMovies,
};
