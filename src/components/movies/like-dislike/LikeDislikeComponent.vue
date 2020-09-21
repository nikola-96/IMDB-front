<template>
  <div>
    <VueLikeDislikeButtons :likes="876547" :dislikes="4567" />
  </div>
</template>
<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import "vue-like-dislike-buttons/src/assets/scss/main.scss";

export default {
  components: {
    VueLikeDislikeButtons,
  },
};
</script>

<style></style>
