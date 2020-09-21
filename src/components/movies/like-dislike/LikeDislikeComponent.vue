<template>
  <div>
    <VueLikeDislikeButtons
      @like="likeHandler"
      @dislike="dislikeHandler"
      :likes="likesDislikes.likes"
      :dislikes="likesDislikes.dislikes"
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
    movie_id: {
      type: Number,
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
  },
  methods: {
    async likeHandler() {
      await this.startIncrementLikes(this.likesDislikes.id);
    },
    async dislikeHandler() {
      await this.startIncrementDislikes(this.likesDislikes.id);
    },
  },
};
</script>

<style></style>
