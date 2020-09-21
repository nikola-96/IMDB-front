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
