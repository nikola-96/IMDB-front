<template>
  <div class="wraper-watch-list"><WatchListSingleComponent /></div>
</template>

<script>
import { mapActions } from "vuex";
import WatchListSingleComponent from "../../components/movies/single-movie-watch-list/WatchListSingleComponent";
export default {
  name: "WatchList",
  components: {
    WatchListSingleComponent,
  },
  methods: {
    ...mapActions(["startFetchMoviesForWatchList"]),
  },
  async created() {
    this.startFetchMoviesForWatchList();
  },
};
</script>

<style scoped>
.wraper-watch-list {
  display: flex;
  justify-content: center;
}
</style>
