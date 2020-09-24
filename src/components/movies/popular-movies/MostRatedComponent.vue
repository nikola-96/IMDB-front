<template>
  <aside>
    <h4>Related movies</h4>
    <ul class="list-group">
      <li
        class="list-group-item list-item"
        @click="redirectToSingleMovie(movie.id)"
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
  name: "MostRatedComponent",
  props: {
    movies: {
      type: Array,
      required: true,
    },
    redirectToSingleMovie: {
      type: Function,
      required: true,
    },
  },
};
</script>
