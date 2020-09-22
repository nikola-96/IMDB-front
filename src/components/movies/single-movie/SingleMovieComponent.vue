<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img" :src="movie.image_url" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.description }}</p>
          <p class="card-text"></p>
        </div>
        <LikeDislikeComponent
          v-if="movie.like_dislike"
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
import LikeDislikeComponent from "../../movies/like-dislike/LikeDislikeComponent";
import { mapActions, mapGetters } from "vuex";
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
      requred: true,
    },
  },
  created() {
    console.log(this.movie);
  },
};
</script>
