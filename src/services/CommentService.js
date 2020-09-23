import HTTP from "./BaseService";
import { COMMENTS } from "./Endpoints";

class CommentService {
  async getComments(movie_id) {
    const response = await HTTP.get(COMMENTS.GET + movie_id);

    return response;
  }
  async postComment(comment) {
    const response = await HTTP.post(COMMENTS.POST, comment);

    return response;
  }
  async fetchMoreComments(movie_id, page) {
    const response = await HTTP.get(
      COMMENTS.GET + movie_id + COMMENTS.PAGE + page
    );

    return response;
  }
}
const commentService = new CommentService();

export default commentService;
