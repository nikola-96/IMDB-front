<template>
  <div v-if="getAllMoviesFromState">
    <SearchComponent
      class="input-search"
      :startSearchMovie="startSearchMovie"
      :startFetchMovies="startFetchMovies"
    />
    <DropdownComponent
      v-if="getGenresFromState"
      class="dropdown"
      :genres="getGenresFromState"
      :startFetchGenreMovie="startFetchGenreMovie"
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
    ]),
  },
  async created() {
    await this.startFetchMovies();
    await this.startFetchAllGenres();
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
}
.input-search {
  margin-bottom: -30px;
}
.dropdown {
  margin-left: 420px;
  margin-bottom: 10px;
}
</style>
