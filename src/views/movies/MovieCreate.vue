<template>
  <div>
    <MovieFormComponent
      :genres="getGenresFromState"
      :postMovie="postMovie"
      :getOmbdMovieFromState="getOmbdMovieFromState"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MovieFormComponent from "../../components/movies/movies-form/MovieFormComponent";
export default {
  name: "MovieCreate",
  components: {
    MovieFormComponent,
  },
  methods: {
    ...mapActions([
      "startFetchAllGenres",
      "postMovie",
      "getOmbdMovieFromState",
    ]),
  },
  computed: {
    ...mapGetters(["getGenresFromState"]),
  },
  async created() {
    await this.startFetchAllGenres();
  },
};
</script>
