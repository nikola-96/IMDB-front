<template>
  <div>
    <VueLikeDislikeButtons
      v-if="movie.id"
      :likes="movie.likes ? movie.likes : 0"
      :dislikes="movie.dislikes ? movie.dislikes : 0"
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
    singleMovie: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    ...mapActions([
      "startIncrementLikeOnMovies",
      "startIncrementDislikeOnMovies",
    ]),
    handleDislike() {
      this.startIncrementDislikeOnMovies({
        id: this.movie.id,
        singleMovie: this.singleMovie,
      });
    },
    handleLike() {
      this.startIncrementLikeOnMovies({
        id: this.movie.id,
        singleMovie: this.singleMovie,
      });
    },
  },
  created() {},
};
</script>

<style></style>
