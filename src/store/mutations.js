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
  CHANGE_NUMBER_OF_LIKES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.like_dislike.id === id) {
        return { ...movie, ...movie.like_dislike.likes++ };
      }
      return movie;
    });
  },
  CHANGE_NUMBER_OF_DISLIKES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.like_dislike.id === id) {
        return { ...movie, ...movie.like_dislike.dislikes++ };
      }
      return movie;
    });
  },
  SET_USER(state, user) {
    state.user = user;
  },
};
