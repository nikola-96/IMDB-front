import HTTP from "./BaseService";
import { COMMENTS } from "./Endpoints";

class CommentService {
  async postComment(comment) {
    const response = await HTTP.post(COMMENTS.POST, comment);

    return response;
  }
}
const commentService = new CommentService();

export default commentService;
