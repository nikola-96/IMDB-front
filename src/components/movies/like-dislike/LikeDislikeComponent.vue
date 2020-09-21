<template>
  <div>
    <VueLikeDislikeButtons
      @like="likeHandler"
      @dislike="dislikeHandler"
      :likes="likesDislikes.likes"
      :dislikes="likesDislikes.dislikes"
      :is-disabled="false"
    />
  </div>
</template>
<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import "vue-like-dislike-buttons/src/assets/scss/main.scss";

export default {
  components: {
    VueLikeDislikeButtons,
  },
  props: {
    likesDislikes: {
      type: Object,
      required: false,
    },
    movie: {
      type: Object,
      required: true,
    },
    startIncrementLikes: {
      type: Function,
      required: true,
    },
    startIncrementDislikes: {
      type: Function,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async likeHandler() {
      await this.startIncrementLikes({
        like_id: this.likesDislikes.id,
        movie_id: this.movie.id,
      });
    },
    async dislikeHandler() {
      await this.startIncrementDislikes({
        likes_id: this.likesDislikes.id,
        movie_id: this.movie.id,
      });
    },
  },
};
</script>

<style></style>
