<template>
  <aside>
    <h4>Related movies</h4>
    <ul class="list-group">
      <li
        class="list-group-item list-item"
        @click="handleClick(movie.id, movie.genre_id)"
        v-for="movie in movies"
        :key="movie.id"
      >
        {{ movie.title }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "RelatedMoviesComponent",
  props: {
    movies: {
      type: Array,
      required: true,
    },
    startFetchSingleMovie: {
      type: Function,
      required: true,
    },
    startFetchComents: {
      type: Function,
      required: true,
    },
    startFetchRelatedMovies: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async handleClick(id, genre_id) {
      await this.startFetchSingleMovie(id);
      await this.startFetchComents(id);
      await this.startFetchRelatedMovies(genre_id);
    },
  },
};
</script>
<style scoped>
li:first-letter {
  text-transform: capitalize;
}
.list-item:hover {
  cursor: pointer;
}
</style>
