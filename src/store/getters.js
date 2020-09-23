export default {
  getAllMoviesFromState: (state) => state.movies,
  getSingleMovieFromState: (state) => state.movie,
  getErrorsFromState: (state) => state.errors,
  getTermFromState: (state) => state.term,
  getGenresFromState: (state) => state.genres,
  getSearchedGenreFromState: (state) => state.genre,
  getCommentsFromState: (state) => state.comments,
  getRelatedMoviesFromState: (state) => state.relatedMovies,
};
