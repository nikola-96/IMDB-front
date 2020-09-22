<template>
  <div class="single-comp-wraper" v-if="getSingleMovieFromState">
    <SingleMovieComponent :movie="getSingleMovieFromState" />
  </div>
</template>

<script>
import SingleMovieComponent from "../../components/movies/single-movie/SingleMovieComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleMovie",
  components: {
    SingleMovieComponent,
  },
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
<style scoped>
.single-comp-wraper {
  display: flex;
  justify-content: center;
}
</style>
