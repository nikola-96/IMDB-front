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
  ADD_COMMENT(state, comment) {
    state.comments.data = [...state.comments.data, comment];
  },
  ADD_COMMENTS(state, comment) {
    state.comments.next_page_url = comment.next_page_url;
    state.comments.data = [...state.comments.data, ...comment.data];
  },

  SET_COMMENTS(state, comments) {
    state.comments = comments;
  },
  SET_RELATED_MOVIES(state, movies) {
    state.relatedMovies = movies;
  },
  INCREMENT_NUM_OF_LIKES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.like) {
        if (movie.like.id === id) {
          return { ...movie, ...movie.like.likes++ };
        }
      }
      return movie;
    });
  },
  INCREMENT_NUM_OF_DISLIKES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.like) {
        if (movie.like.id === id) {
          return { ...movie, ...movie.like.dislikes++ };
        }
      }
      return movie;
    });
  },
};
