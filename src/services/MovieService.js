import { MOVIES } from "./Endpoints";
import HTTP from "./BaseService";

class MovieService {
  async fetchAllMovies() {
    await HTTP.get(MOVIES.GET_ALL);
  }
}

const movieService = new MovieService();

export default movieService;
