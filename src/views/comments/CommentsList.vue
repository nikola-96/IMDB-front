<template>
  <div>
    <SingleCommentComponent
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>
<script>
import SingleCommentComponent from "../../components/comments/single-comment/SingleCommentComponent";

export default {
  name: "CommentsList",
  components: {
    SingleCommentComponent,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
