<template>
  <div class="wraper-watch-list">
    <h3>Your watch list</h3>
    <div v-for="movie in getWatchListFromState.data" :key="movie.id">
      <WatchListSingleComponent
        class="single-comp"
        :movie="movie"
        :startDeleteMovieFromWatchList="startDeleteMovieFromWatchList"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WatchListSingleComponent from "../../components/movies/single-movie-watch-list/WatchListSingleComponent";
export default {
  name: "WatchList",
  components: {
    WatchListSingleComponent,
  },
  methods: {
    ...mapActions([
      "startFetchMoviesForWatchList",
      "startDeleteMovieFromWatchList",
    ]),
  },
  computed: {
    ...mapGetters(["getWatchListFromState"]),
  },
  async created() {
    await this.startFetchMoviesForWatchList();
  },
};
</script>

<style scoped>
.wraper-watch-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.single-comp {
  margin-top: 10px;
}
</style>
