<template>
  <div class="card mb-3 single" style="max-width: 540px">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movie.image_url" class="card-img" :alt="image" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" @click="redirectToSingleMovie(movie.id)">
            {{ movie.title }}
          </h5>
          <p class="card-text">{{ movie.description.slice(0, 150) }}...</p>
          <p class="card-text"></p>
        </div>
        <LikeDislikeComponent :movie="movie" />
      </div>
      <div class="watched-wraper" v-if="!movie.lists[0]">
        <p class="watch-list">Add to watch list</p>
        <input
          type="checkbox"
          class="watch-checkbox"
          @click="handleSelectMovie()"
        />
      </div>
      <p class="watch-list" v-else>You've watched this!</p>
    </div>
  </div>
</template>
<script>
import LikeDislikeComponent from "../like-dislike/LikeDislikeComponent";
import imageService from "../../../services/ImageService";
export default {
  name: "SingleMovieComponent",
  components: {
    LikeDislikeComponent,
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
    user: {
      type: Object,
      required: true,
    },
    startAddMovieToWatchList: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      image: {},
    };
  },
  async created() {
    const response = await imageService.fetchImage();
    this.image = response.data;
  },
};
</script>
<style scoped>
.single:hover {
  cursor: pointer;
}
.watch-checkbox {
  margin-left: 500px;
}
.watch-list {
  margin-left: 350px;
  font-size: 14px;
}
/* .watched-wraper { */
/* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
/* } */
</style>
