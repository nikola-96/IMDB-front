<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleMovie",
  methods: {
    ...mapActions(["startFetchSingleMovie"]),
  },
  computed: {
    ...mapGetters(["getSingleMovieFromState"]),
  },
  data() {
    return {
      id: null,
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.startFetchSingleMovie(this.id);
    console.log(this.getSingleMovieFromState);
  },
};
</script>