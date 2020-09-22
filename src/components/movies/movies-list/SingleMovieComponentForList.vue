<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movie.image_url" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title title" @click="redirectToSingleMovie(movie.id)">
            {{ movie.title }}
          </h5>
          <p class="card-text">{{ movie.description.slice(0, 150) }}...</p>
          <p class="card-text"></p>
        </div>
        <LikeDislikeComponent
          :likesDislikes="movie.like_dislike"
          :movie="movie"
          :startIncrementLikes="startIncrementLikes"
          :startIncrementDislikes="startIncrementDislikes"
          :user="getUserFromState"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import LikeDislikeComponent from "../../movies/like-dislike/LikeDislikeComponent";

export default {
  name: "SingleMovieComponent",
  components: {
    LikeDislikeComponent,
  },
  methods: {
    ...mapActions(["startIncrementLikes", "startIncrementDislikes"]),
  },
  computed: {
    ...mapGetters(["getUserFromState"]),
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    redirectToSingleMovie: {
      type: Function,
      required: true,
    },
  },
  created() {
    console.log(this.movie);
  },
};
</script>
<style scoped>
.title:hover {
  cursor: pointer;
}
</style>
