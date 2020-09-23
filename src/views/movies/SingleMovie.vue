<template>
  <div>
    <div class="single-comp-wraper" v-if="getSingleMovieFromState">
      <SingleMovieComponent :movie="getSingleMovieFromState" />
      <CommentFormComponent
        :startPostComment="startPostComment"
        :movie="getSingleMovieFromState"
      />
      <CommentsList :comments="getCommentsFromState" />
    </div>
    <aside class="side"><RelatedMoviesComponent /></aside>
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
    ]),
  },
  computed: {
    ...mapGetters(["getSingleMovieFromState", "getCommentsFromState"]),
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
    console.log(this.getSingleMovieFromState.genre_id);
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
.side {
  display: flex;
  margin-left: 10%;
  margin-top: -430px;
}
</style>
