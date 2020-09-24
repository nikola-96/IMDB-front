<template>
  <div v-if="getAllMoviesFromState">
    <SearchComponent
      class="input-search"
      :startSearchMovie="startSearchMovie"
      :startFetchMovies="startFetchMovies"
      :genre="getSearchedGenreFromState"
      :startFetchGenreForSearhTerm="startFetchGenreForSearhTerm"
    />
    <DropdownComponent
      v-if="getGenresFromState"
      class="dropdown"
      :genres="getGenresFromState"
      :startFetchGenreMovie="startFetchGenreMovie"
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
        :user="getCurrentUserFromState"
        :startAddMovieToWatchList="startAddMovieToWatchList"
      />
    </div>
    <PaginationComponent
      :movies="getAllMoviesFromState"
      :startFetchNextPage="startFetchNextPage"
      :getTermFromState="getTermFromState"
      :startFetchNextPageForSearchedTerm="startFetchNextPageForSearchedTerm"
      :getSearchedGenreFromState="getSearchedGenreFromState"
      :startFetchNextPageForGenre="startFetchNextPageForGenre"
    />
  </div>
</template>
<script>
import PaginationComponent from "../../components/movies/pagination/PaginationComponent";
import SingleMovieComponentForList from "../../components/movies/movies-list/SingleMovieComponentForList";
import SearchComponent from "../../components/movies/search-component/SearchComponent";
import DropdownComponent from "../../components/movies/dropown/DropdownComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    PaginationComponent,
    SingleMovieComponentForList,
    SearchComponent,
    DropdownComponent,
  },
  methods: {
    ...mapActions([
      "startFetchMovies",
      "startFetchNextPage",
      "startSearchMovie",
      "startFetchNextPageForSearchedTerm",
      "startFetchAllGenres",
      "startFetchGenreMovie",
      "startFetchNextPageForGenre",
      "startFetchGenreForSearhTerm",
      "startFetchCurrentuser",
      "startAddMovieToWatchList",
    ]),
    redirectToSingleMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
  computed: {
    ...mapGetters([
      "getAllMoviesFromState",
      "getTermFromState",
      "getGenresFromState",
      "getSearchedGenreFromState",
      "getCurrentUserFromState",
    ]),
  },
  async created() {
    await this.startFetchMovies();
    await this.startFetchAllGenres();
    await this.startFetchCurrentuser();
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
}
/* .input-search {
  margin-bottom: -30px;
} */
.dropdown {
  margin-left: 420px;
  margin-bottom: 10px;
}
</style>
