<template>
  <aside>
    <ul class="list-group">
      <li class="list-group-item" v-for="movie in movies" :key="movie.id">
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
  },
};
</script>
<style scoped>
li:first-letter {
  text-transform: capitalize;
}
</style>
