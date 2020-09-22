<template>
  <div>
    <!-- Default dropright button -->
    <div class="btn-group dropright pr">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Genres
      </button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item menu-item"
          v-for="genre in genres"
          :key="genre.id"
          @click="handleClick(genre.id)"
          >{{ genre.name }}</a
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item menu-item" @click="handleFetchAll">Show all</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DropdownComponent",
  props: {
    genres: {
      type: Array,
      required: true,
    },
    startFetchGenreMovie: {
      type: Function,
      required: true,
    },
    startFetchMovies: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async handleClick(id) {
      await this.startFetchGenreMovie(id);
    },
    async handleFetchAll() {
      await this.startFetchMovies();
    },
  },
};
</script>
<style script>
.menu-item:hover {
  cursor: pointer;
}
.menu-item {
  text-transform: capitalize;
}
</style>
