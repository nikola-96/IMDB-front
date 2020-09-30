<template>
  <div class="movie-list-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <a
            type="button"
            class="nav-link watch-list"
            @click="() => this.$router.push('/movies/watch_list')"
          >
            Watch list
          </a>
          <a
            type="button"
            class="nav-link watch-list"
            @click="() => this.$router.push('/movies/create')"
          >
            Add movie
          </a>

          <SearchComponent
            :startSearchMovie="startSearchMovie"
            :startFetchMovies="startFetchMovies"
            :genre="getSearchedGenreFromState"
            :startFetchGenreForSearhTerm="startFetchGenreForSearhTerm"
          />
          <DropdownComponent
            class="dropdown"
            v-if="getGenresFromState"
            :genres="getGenresFromState"
            :startFetchGenreMovie="startFetchGenreMovie"
            :startFetchMovies="startFetchMovies"
          />
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SearchComponent from "../../components/movies/search-component/SearchComponent";
import DropdownComponent from "../../components/movies/dropown/DropdownComponent";
export default {
  name: "HeaderForMovieList",
  components: {
    SearchComponent,
    DropdownComponent,
  },
  methods: {
    ...mapActions([
      "startSearchMovie",
      "startFetchMovies",
      "startFetchGenreForSearhTerm",
      "startFetchGenreMovie",
    ]),
  },
  computed: {
    ...mapGetters(["getSearchedGenreFromState", "getGenresFromState"]),
  },
};
</script>
<style scoped>
.dropdown {
  margin-left: 20px;
}
.movie-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}
</style>
