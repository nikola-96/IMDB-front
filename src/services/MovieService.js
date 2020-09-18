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
}

const movieService = new MovieService();

export default movieService;
