<template>
  <div>
    <input
      class="form-control mr-sm-2"
      v-debounce:750ms="handleSearch"
      type="text"
      placeholder="Search movie"
    />
  </div>
</template>
<script>
import Vue from "vue";
import vueDebounce from "vue-debounce";

Vue.use(vueDebounce);

export default {
  name: "SearchComponent",
  props: {
    startSearchMovie: {
      type: Function,
      required: true,
    },
    startFetchMovies: {
      type: Function,
      required: true,
    },
    genre: {
      type: Number,
      required: false,
    },
    startFetchGenreForSearhTerm: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async handleSearch(term) {
      if (term && this.genre) {
        this.startFetchGenreForSearhTerm({ term: term, genre: this.genre });
      } else if (term) {
        await this.startSearchMovie(term);
      } else {
        await this.startFetchMovies();
      }
    },
  },
};
</script>
