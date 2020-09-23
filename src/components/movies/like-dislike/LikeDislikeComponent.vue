<template>
  <div>
    <VueLikeDislikeButtons
      :likes="movie.likes[0].likes"
      :dislikes="movie.likes[0].dislikes"
    />
  </div>
</template>
<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import "vue-like-dislike-buttons/src/assets/scss/main.scss";
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
};
</script>

<style></style>
