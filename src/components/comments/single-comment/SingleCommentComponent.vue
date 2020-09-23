<template>
  <div class="comment-wraper">
    <div class="list-group">
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 heading">{{ comment.user.name }}</h5>
        </div>
        <p class="mb-1">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleCommentComponent",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment-wraper {
  width: 500px;
  margin-top: 5px;
  font-size: 14px;
}
.heading {
  font-size: 18px;
}
</style>
