<template>
  <div>
    <div
      class="wraper"
      v-for="movie in getAllMoviesFromState.data"
      :key="movie.id"
    >
      <SingleMovieComponent :movie="movie" />
    </div>
    <PaginationComponent
      :movies="getAllMoviesFromState"
      :startFetchNextPage="startFetchNextPage"
      :paginationArr="getPaginationArrayFromState"
    />
  </div>
</template>
<script>
import SingleMovieComponent from "../../components/movies/movies-list/SingleMovieComponent";
import PaginationComponent from "../../components/movies/pagination/PaginationComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    SingleMovieComponent,
    PaginationComponent,
  },
  methods: {
    ...mapActions(["startFetchMovies", "startFetchNextPage"]),
  },
  computed: {
    ...mapGetters(["getAllMoviesFromState"]),
  },
  async created() {
    await this.startFetchMovies();
    this.totalPages = this.getAllMoviesFromState.last_page;
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
}
</style>
