<template>
  <div>

    <div class="wraper" v-for="movie in getAllMoviesFromState" :key="movie.id">
      <SingleMovieComponentForList :movie="movie" :redirectToSingleMovie="redirectToSingleMovie" />
    </div>
    <PaginationComponent
      :movies="getAllMoviesFromState"
      :startFetchNextPage="startFetchNextPage"
    />
  </div>
</template>
<script>
import PaginationComponent from "../../components/movies/pagination/PaginationComponent";
import SingleMovieComponentForList from "../../components/movies/movies-list/SingleMovieComponentForList";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    PaginationComponent,
    SingleMovieComponentForList,
  },
  methods: {
    ...mapActions(["startFetchMovies", "startFetchNextPage"]),
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
