<template>
  <div>
    <VueLikeDislikeButtons
      @like="likeHandler"
      @dislike="dislikeHandler"
      :likes="likes"
      :dislikes="dislikes"
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
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    likeHandler() {
      console.log("Like");
    },
    dislikeHandler() {
      console.log("Dislike");
    },
  },
  beforeMount() {
    if (this.likesDislikes) {
      if (this.likesDislikes.likes) {
        this.likes = this.likesDislikes.likes;
      } else if (this.likesDislikes.dislikes) {
        this.dislikes = this.likesDislikes.dislikes;
      }
    }
  },
};
</script>

<style></style>
