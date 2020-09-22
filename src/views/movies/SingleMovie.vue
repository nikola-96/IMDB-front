<template>
  <div class="single-comp-wraper">
    <SingleMovieComponent :movie="getSingleMovieFromState" />
    <CommentFormComponent />
  </div>
</template>

<script>
import SingleMovieComponent from "../../components/movies/single-movie/SingleMovieComponent";
import CommentFormComponent from "../../components/movies/movie-comments/CommetFormComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleMovie",
  components: {
    SingleMovieComponent,
    CommentFormComponent,
  },
  methods: {
    ...mapActions(["startFetchSingleMovie"]),
  },
  computed: {
    ...mapGetters(["getSingleMovieFromState"]),
  },
  data() {
    return {
      id: null,
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.startFetchSingleMovie(this.id);
  },
};
</script>
<style scoped>
.single-comp-wraper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
