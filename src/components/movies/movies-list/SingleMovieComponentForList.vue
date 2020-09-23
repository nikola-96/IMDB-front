<template>
  <div
    class="card mb-3 single"
    style="max-width: 540px;"
    @click="redirectToSingleMovie(movie.id)"
  >
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movie.image_url" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.description.slice(0, 150) }}...</p>
          <p class="card-text"></p>
        </div>
        <LikeDislikeComponent :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script>
import LikeDislikeComponent from "../like-dislike/LikeDislikeComponent";
export default {
  name: "SingleMovieComponent",
  components: {
    LikeDislikeComponent,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    redirectToSingleMovie: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
.single:hover {
  cursor: pointer;
}
</style>
