<template>
  <div>
    <MovieFormComponent :genres="getGenresFromState" :postMovie="postMovie" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MovieFormComponent from "../../components/movies/movies-form/MovieFormComponent";
export default {
  name: "MovieCreate",
  components: {
    MovieFormComponent,
  },
  methods: {
    ...mapActions(["startFetchAllGenres", "postMovie"]),
  },
  computed: {
    ...mapGetters(["getGenresFromState"]),
  },
  async created() {
    await this.startFetchAllGenres();
  },
};
</script>
