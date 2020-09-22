<template>
  <form @submit.prevent="handlePostComment" class="form-comment-wraper">
    <div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Write comment</span>
        </div>

        <textarea
          class="form-control"
          aria-label="With textarea"
          v-model="content"
          required
        ></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-secondary button-comment">
      Post
    </button>
  </form>
</template>
<script>
export default {
  name: "CommentFormComponent",
  props: {
    startPostComment: {
      type: Function,
      required: true,
    },
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async handlePostComment() {
      await this.startPostComment({
        content: this.content,
        movie_id: this.movie.id,
      });
      this.content = "";
    },
  },
};
</script>
<style>
.form-comment-wraper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.button-comment {
  height: 40px;
  margin-left: 10px;
}
</style>
