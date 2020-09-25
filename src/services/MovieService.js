import { MOVIES } from "./Endpoints";
import HTTP from "./BaseService";

class MovieService {
  async fetchAllMovies() {
    const response = await HTTP.get(MOVIES.GET_ALL);

    return response;
  }
  async fetchSingleMovie(id) {
    const response = await HTTP.get(`${MOVIES.SINGLE_MOVIE}${id}`);

    return response;
  }
  async fetchNextPage(page) {
    const response = await HTTP.get(MOVIES.PAGE + page);
    return response;
  }
  async fetchSearchedMovies(term) {
    const response = await HTTP.get(`${MOVIES.SEARCH_TERM}${term}`);

    return response;
  }
  async fetchNextPageForSearchedTerm(page, term) {
    const response = await HTTP.get(
      `${MOVIES.PAGE}${page}${MOVIES.SEARCH_TERM_PAGINATION}${term}` //fetching next page for explicit term
    );
    return response;
  }
  async fetchRelatedMovies(genre_id) {
    const response = await HTTP.get(MOVIES.RELATED_MOVIES + genre_id);

    return response;
  }
  async fetchAllGenres() {
    const response = await HTTP.get(MOVIES.GET_ALL_GENRES);

    return response;
  }
  async fetchGenreMovie(id) {
    const response = await HTTP.get(`${MOVIES.GET_MOVIES_BY_GENRE}${id}`);

    return response;
  }
  async fetchNextPageForGenre(page, genre) {
    const response = await HTTP.get(
      `${MOVIES.GET_MOVIES_BY_GENRE}${page}${MOVIES.ONLY_PAGE}${genre}` //fetching next page for explicit genre
    );
    return response;
  }
  async fetchGenreForSearhTerm(term, genre) {
    const response = await HTTP.get(
      MOVIES.GET_ALL +
        MOVIES.SEARCH_MOVIE_GENRE +
        genre +
        MOVIES.SEARCH_TERM_PAGINATION +
        term
    );
    return response;
  }
  async addMovieToWatchList(id) {
    const response = await HTTP.post(MOVIES.ADD_TO_WHATCH_LIST, { id: id });
    console.log(response.data);
    return response;
  }
  async fetchMoviesForWatchList() {
    const response = await HTTP.get(MOVIES.GET_WATCH_LIST);

    return response;
  }
  async deleteMovieFromWatchList(id) {
    await HTTP.delete(MOVIES.DELETE_FROM_WATCH_LIST + id);
  }
  async incrementLike(id) {
    await HTTP.post(MOVIES.GET_ALL + `/${id}` + MOVIES.LIKE_MOVIE);
  }
  async incrementDislike(id) {
    await HTTP.post(MOVIES.GET_ALL + `/${id}` + MOVIES.DISLIKE_MOVIE);
  }
  async fetchMostRatedMovies() {
    const response = await HTTP.get("/movies/most_rated");

    return response;
  }
}

const movieService = new MovieService();

export default movieService;
