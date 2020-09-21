<template>
  <div v-if="getAllMoviesFromState">
    <SearchComponent
      class="input-search"
      :startSearchMovie="startSearchMovie"
      :startFetchMovies="startFetchMovies"
    />
    <div
      class="wraper"
      v-for="movie in getAllMoviesFromState.data"
      :key="movie.id"
    >
      <SingleMovieComponentForList
        :movie="movie"
        :redirectToSingleMovie="redirectToSingleMovie"
      />
    </div>
    <PaginationComponent
      :movies="getAllMoviesFromState"
      :startFetchNextPage="startFetchNextPage"
      :getTermFromState="getTermFromState"
      :startFetchNextPageForSearchedTerm="startFetchNextPageForSearchedTerm"
    />
  </div>
</template>
<script>
import PaginationComponent from "../../components/movies/pagination/PaginationComponent";
import SingleMovieComponentForList from "../../components/movies/movies-list/SingleMovieComponentForList";
import SearchComponent from "../../components/movies/search-component/SearchComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    PaginationComponent,
    SingleMovieComponentForList,
    SearchComponent,
  },
  methods: {
    ...mapActions([
      "startFetchMovies",
      "startFetchNextPage",
      "startSearchMovie",
      "startFetchNextPageForSearchedTerm",
    ]),
    redirectToSingleMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
  computed: {
    ...mapGetters(["getAllMoviesFromState", "getTermFromState"]),
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
.input-search {
  margin-bottom: 15px;
}
</style>
