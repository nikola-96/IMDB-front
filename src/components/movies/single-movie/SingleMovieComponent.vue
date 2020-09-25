<template>
  <div class="card mb-3" style="max-width: 540px" v-if="movie">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img" :src="movie.image_url" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.description }}</p>
          <p class="card-text visited" v-if="movie.visits">
            Page is visited: {{ movie.visits.visits }} times
          </p>
          <p v-if="movie.lists && movie.lists[0]">You've watched this!</p>
        </div>
        <LikeDislikeComponent :movie="movie" :singleMovie="true" />
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
      requred: true,
    },
  },
};
</script>
<style scoped>
.visited {
  font-size: 12px;
}
</style>
