<template>
  <div class="wraper-asaide">
    <div class="single-comp-wraper" v-if="getSingleMovieFromState">
      <button
        type="button"
        class="btn btn-light btn-redirect"
        @click="() => this.$router.push('/movies')"
      >Go back</button>
      <SingleMovieComponent :movie="getSingleMovieFromState" />
      <CommentFormComponent :startPostComment="startPostComment" :movie="getSingleMovieFromState" />
      <CommentsList
        :comments="getCommentsFromState"
        :startFetchMoreComments="startFetchMoreComments"
        :movie="getSingleMovieFromState"
      />
    </div>
    <aside class="side">
      <RelatedMoviesComponent
        :movies="getRelatedMoviesFromState"
        :startFetchSingleMovie="startFetchSingleMovie"
        :startFetchComents="startFetchComents"
        :startFetchRelatedMovies="startFetchRelatedMovies"
      />
    </aside>
  </div>
</template>

<script>
import SingleMovieComponent from "../../components/movies/single-movie/SingleMovieComponent";
import CommentFormComponent from "../../components/comments/movie-comments/CommetFormComponent";
import CommentsList from "../comments/CommentsList";
import RelatedMoviesComponent from "../../components/movies/related-movies/RelatedMoviesComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleMovie",
  components: {
    SingleMovieComponent,
    CommentFormComponent,
    CommentsList,
    RelatedMoviesComponent,
  },
  methods: {
    ...mapActions([
      "startFetchSingleMovie",
      "startPostComment",
      "startFetchComents",
      "startFetchRelatedMovies",
      "startFetchMoreComments",
    ]),
  },
  computed: {
    ...mapGetters([
      "getSingleMovieFromState",
      "getCommentsFromState",
      "getRelatedMoviesFromState",
    ]),
  },
  data() {
    return {
      id: null,
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.startFetchSingleMovie(this.id);
    await this.startFetchComents(this.id);
    await this.startFetchRelatedMovies(this.getSingleMovieFromState.genre_id);
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
.wraper-asaide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.side {
  margin-left: 20px;
}
.btn-redirect {
  margin-left: -400px;
  margin-bottom: 10px;
}
</style>
