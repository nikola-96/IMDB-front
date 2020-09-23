<template>
  <div class="card mb-3 single" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movie.image_url" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <input type="checkbox" class="watch-checkbox" />
          <h5 class="card-title" @click="redirectToSingleMovie(movie.id)">{{movie.title}}</h5>
          <p class="card-text">{{movie.description.slice(0, 150)}}...</p>
          <p class="card-text"></p>
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
.watch-checkbox {
  margin-left: 300px;
}
</style>
