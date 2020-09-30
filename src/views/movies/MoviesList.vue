<template>
  <div v-if="getAllMoviesFromState">
    <div class="wraper-aside">
      <div class="most-rated">
        <MostRatedComponent
          v-if="startFetchMostRatedMovies"
          :movies="getMostRatedMoviesFromState"
          :redirectToSingleMovie="redirectToSingleMovie"
        />
      </div>
      <div class="wraper">
        <div class="movie-list-header">
          <HeaderForMovieList />
        </div>
        <div>
          <SingleMovieComponentForList
            v-for="movie in getAllMoviesFromState.data"
            :key="movie.id"
            :movie="movie"
            :redirectToSingleMovie="redirectToSingleMovie"
            :startAddMovieToWatchList="startAddMovieToWatchList"
            :user="getCurrentUserFromState"
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
    </div>
  </div>
</template>
<script>
import PaginationComponent from "../../components/movies/pagination/PaginationComponent";
import SingleMovieComponentForList from "../../components/movies/movies-list/SingleMovieComponentForList";
import MostRatedComponent from "../../components/movies/popular-movies/MostRatedComponent";
import HeaderForMovieList from "../../views/movies/HeaderForMovieList";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    PaginationComponent,
    SingleMovieComponentForList,
    MostRatedComponent,
    HeaderForMovieList,
  },
  methods: {
    ...mapActions([
      "startFetchMovies",
      "startFetchNextPage",
      "startFetchNextPageForSearchedTerm",
      "startFetchAllGenres",
      "startFetchNextPageForGenre",
      "startFetchCurrentuser",
      "startAddMovieToWatchList",
      "startFetchMostRatedMovies",
    ]),
    redirectToSingleMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
  computed: {
    ...mapGetters([
      "getAllMoviesFromState",
      "getTermFromState",
      "getSearchedGenreFromState",
      "getCurrentUserFromState",
      "getMostRatedMoviesFromState",
    ]),
  },
  async created() {
    await this.startFetchMovies();
    await this.startFetchAllGenres();
    await this.startFetchCurrentuser();
    await this.startFetchMostRatedMovies();
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.input-search {
  margin-right: 80px;
}
.dropdown {
  margin-right: -190px;
}
.wraper-aside {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}
.most-rated {
  margin-right: 20px;
  margin-left: -50px;
}
.movie-list-header {
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: center; */
  margin-bottom: 10px;
  width: 100%;
}
.watch-list {
  margin-right: 70px;
  margin-left: -190px;
}
</style>
