<template>
  <div class="wraper-watch-list"><WatchListSingleComponent /></div>
</template>

<script>
import WatchListSingleComponent from "../../components/movies/single-movie-watch-list/WatchListSingleComponent";
export default {
  name: "WatchList",
  components: {
    WatchListSingleComponent,
  },
};
</script>

<style scoped>
.wraper-watch-list {
  display: flex;
  justify-content: center;
}
</style>
