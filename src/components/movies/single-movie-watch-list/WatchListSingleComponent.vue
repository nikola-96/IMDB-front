<template>
  <div>
    <div class="card" style="width: 30rem;">
      <img :src="movie.image_url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <a class="btn btn-primary" @click="hadnleDelete">Remove</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchListSingleComponent",
  props: {
    movie: {
      type: Object,
      requred: true,
    },
    startDeleteMovieFromWatchList: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async hadnleDelete() {
      await this.startDeleteMovieFromWatchList(this.movie.id);
    },
  },
  created() {
    console.log(this.movie);
  },
};
</script>
