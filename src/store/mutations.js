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
  SET_CURRENT_USER(state, user) {
    state.user = user;
  },
  SET_WATCH_LIST(state, movies) {
    state.watchList = movies;
  },
  DELETE_MOVIE_FROM_LIST(state, id) {
    state.watchList.data = state.watchList.data.filter(
      (movie) => movie.id !== id
    );
  },
  INCREMENT_NUM_OF_LIKES_MOVIES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.id === id) {
        movie.likes = movie.likes + 1;
        return movie;
      }
      return movie;
    });
  },
  INCREMENT_NUM_OF_DISLIKES_MOVIES(state, id) {
    state.movies.data = state.movies.data.map((movie) => {
      if (movie.id === id) {
        movie.dislikes = movie.dislikes + 1;
        return movie;
      }
      return movie;
    });
  },
  INCREMENT_NUM_OF_LIKES_ON_SINGLE_MOVIES(state) {
    state.movie.likes = state.movie.likes + 1;
  },
  INCREMENT_NUM_OF_DISLIKES_ON_SINGLE_MOVIES(state) {
    state.movie.dislikes = state.movie.dislikes + 1;
  },
  SET_MOST_RATED_MOVIES(state, movies) {
    state.mostRatedMovies = movies;
  },
};
