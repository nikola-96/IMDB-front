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
          <button
            type="button"
            class="btn btn-secondary watch-list"
            @click="() => this.$router.push('/movies/watch_list')"
          >
            Watch list
          </button>
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
import SearchComponent from "../../components/movies/search-component/SearchComponent";
import DropdownComponent from "../../components/movies/dropown/DropdownComponent";
import MostRatedComponent from "../../components/movies/popular-movies/MostRatedComponent";
import channel from "../../services/WebsocketService";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    PaginationComponent,
    SingleMovieComponentForList,
    SearchComponent,
    DropdownComponent,
    MostRatedComponent,
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
      "startFetchMostRatedMovies",
      "incremetLikeSocket",
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
      "getMostRatedMoviesFromState",
    ]),
  },
  async created() {
    await this.startFetchMovies();
    await this.startFetchAllGenres();
    await this.startFetchCurrentuser();
    await this.startFetchMostRatedMovies();
    channel.bind("my-event", (event) => {
      console.log("usao sam");
      this.incremetLikeSocket(event.like.id);
    });
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.watch-list {
  margin-right: 70px;
  margin-left: -190px;
}
</style>
