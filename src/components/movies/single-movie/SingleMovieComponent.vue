<template>
  <div class="card mb-3" style="max-width: 540px;">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleMovieComponent",
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
