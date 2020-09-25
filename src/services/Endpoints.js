export const MOVIES = {
  GET_ALL: "/movies",
  PAGE: "/movies?page=",
  SINGLE_MOVIE: "/movies/",
  SEARCH_TERM: "/movies?term=",
  SEARCH_TERM_PAGINATION: "&term=",
  RELATED_MOVIES: "/movies/related_genres?genre=",
  GET_ALL_GENRES: "/movies/genres",
  GET_MOVIES_BY_GENRE: "/movies?genre=",
  GET_MOVIES_BY_GENRE_FOR_PAGG: "/genre?genre=",
  ONLY_PAGE: "&page=",
  SEARCH_MOVIE_GENRE: "?genre=",
  LIKE_MOVIE: "/likes",
  DISLIKE_MOVIE: "/dislikes",
  MOST_RATED: "/movies/most_rated",
};
export const AUTH = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};

export const COMMENTS = {
  GET: "/movies/comments?movie_id=",
  POST: "/movies/comments",
  PAGE: "&page=",
};
