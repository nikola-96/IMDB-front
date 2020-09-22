<template>
  <div class="comment-wraper">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </a>
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
  font-size: 12px;
}
</style>
