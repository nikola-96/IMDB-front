export default {
  getAllMoviesFromState: (state) => state.movies,
  getSingleMovieFromState: (state) => state.movie,
  getErrorsFromState: (state) => state.errors,
  getTermFromState: (state) => state.term,
  getGenresFromState: (state) => state.genres,
  getSearchedGenreFromState: (state) => state.genre,
  getCommentsFromState: (state) => state.comments,
  getRelatedMoviesFromState: (state) => state.relatedMovies,
  getCurrentUserFromState: (state) => state.user,
  getWatchListFromState: (state) => state.watchList,
  getMostRatedMoviesFromState: (state) => state.mostRatedMovies,
  getOmbdMovieFromState: (state) => state.mostRatedMovies,
};
