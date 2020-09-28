import HTTP from "./BaseService";

class ImageService {
  async fetchImage() {
    const response = await HTTP.get("movies/image");

    return response;
  }
}
const imageService = new ImageService();
export default imageService;
