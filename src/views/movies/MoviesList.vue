<template>
  <div>
    <div class="wraper" v-for="movie in getAllMoviesFromState" :key="movie.id">
      <SingleMovieComponent :movie="movie" />
    </div>
  </div>
</template>
<script>
import SingleMovieComponent from "../../components/movies/movies-list/SingleMovieComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  components: {
    SingleMovieComponent,
  },
  methods: {
    ...mapActions(["startFetchMovies"]),
  },
  computed: {
    ...mapGetters(["getAllMoviesFromState"]),
  },
  async created() {
    await this.startFetchMovies();
    console.log("radi");
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  justify-content: center;
}
</style>