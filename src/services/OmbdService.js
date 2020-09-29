import { MOVIES } from "./Endpoints";
const axios = require("axios");
const qs = require("querystring");

class OmdbService {
  async getMovieFromOmbd(title) {
    const data = { t: title };
    const response = await axios.get(MOVIES.OMDB + qs.stringify(data));

    return response.data;
  }
}
const omdbService = new OmdbService();

export default omdbService;
