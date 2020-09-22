<template>
  <div>
    <SingleCommentComponent v-for="comment in comments.data" :key="comment.id" :comment="comment" />
    <button
      :disabled="this.comments.next_page_url ? false : true "
      type="button"
      class="btn btn-outline-secondary btn-comments"
      @click="handleShowMore"
    >Show More</button>
  </div>
</template>
<script>
import SingleCommentComponent from "../../components/comments/single-comment/SingleCommentComponent";

export default {
  name: "CommentsList",
  components: {
    SingleCommentComponent,
  },
  props: {
    comments: {
      type: [Array, Object],
      required: true,
    },
    startFetchMoreComments: {
      type: Function,
      required: true,
    },
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async handleShowMore() {
      await this.startFetchMoreComments({
        movie_id: this.movie.id,
        page: this.comments.next_page_url[
          this.comments.next_page_url.length - 1
        ],
      });
    },
  },
};
</script>
<style scoped>
.btn-comments {
  margin-top: 5px;
}
</style>
