import { MOVIES } from "./Endpoints";
import HTTP from "./BaseService";

class MovieService {
  async fetchAllMovies() {
    const response = await HTTP.get(MOVIES.GET_ALL);
    return response;
  }
}

const movieService = new MovieService();

export default movieService;
