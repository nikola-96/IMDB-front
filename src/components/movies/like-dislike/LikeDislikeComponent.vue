<template>
  <div>
    <VueLikeDislikeButtons
      v-if="movie.id"
      :likes="movie.like.likes"
      :dislikes="movie.like.dislikes"
      @like="handleLike"
      @dislike="handleDislike"
    />
  </div>
</template>
<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import "vue-like-dislike-buttons/src/assets/scss/main.scss";
import { mapActions } from "vuex";
export default {
  name: "LikeDislikeComponent",
  components: {
    VueLikeDislikeButtons,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["startIncrementLike", "startIncrementDislike"]),
    handleDislike() {
      this.startIncrementDislike(this.movie.like.id);
    },
    handleLike() {
      this.startIncrementLike(this.movie.like.id);
    },
  },
};
</script>

<style></style>
