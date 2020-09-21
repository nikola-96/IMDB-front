<template>
  <div>
    <VueLikeDislikeButtons
      @like="likeHandler"
      @dislike="dislikeHandler"
      :likes="computeNumberLikes()"
      :dislikes="computeNumberDislikes()"
    />
  </div>
</template>
<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import "vue-like-dislike-buttons/src/assets/scss/main.scss";

export default {
  components: {
    VueLikeDislikeButtons,
  },
  props: {
    likesDislikes: {
      type: Object,
      required: false,
    },
    movie_id: {
      type: Number,
      required: true,
    },
    startIncrementLikes: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    likeHandler() {
      this.startIncrementLikes(this.likesDislikes.id);
    },
    dislikeHandler() {
      console.log("Dislike");
    },
    computeNumberDislikes() {
      if (this.likesDislikes) {
        if (this.likesDislikes.dislikes) {
          return this.likesDislikes.dislikes;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    computeNumberLikes() {
      if (this.likesDislikes) {
        if (this.likesDislikes.likes) {
          return this.likesDislikes.likes;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
  },
};
</script>

<style></style>
