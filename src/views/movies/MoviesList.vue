<template>
  <div>
    <div class="wraper" v-for="movie in getAllMoviesFromState" :key="movie.id">
      <SingleMovieComponentForList
        :movie="movie"
        :redirectToSingleMovie="redirectToSingleMovie"
      />
    </div>
  </div>
</template>
<script>
import SingleMovieComponentForList from "../../components/movies/movies-list/SingleMovieComponentForList";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    SingleMovieComponentForList,
  },
  methods: {
    ...mapActions(["startFetchMovies"]),
    redirectToSingleMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
  computed: {
    ...mapGetters(["getAllMoviesFromState"]),
  },
  async created() {
    await this.startFetchMovies();
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
}
</style>
