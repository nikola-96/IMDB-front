<template>
  <div>
    <sliding-pagination
      v-if="movies.current_page"
      :current="movies.current_page"
      :total="movies.last_page"
      @page-change="pageChangeHandler"
    ></sliding-pagination>
  </div>
</template>

<script>
import SlidingPagination from "vue-sliding-pagination";
export default {
  name: "PaginationComponent",
  components: {
    SlidingPagination,
  },
  props: {
    movies: {
      type: [Array, Object],
      required: true,
    },
    startFetchNextPage: {
      type: Function,
      required: true,
    },
    getTermFromState: {
      type: String,
      required: false,
    },
    startFetchNextPageForSearchedTerm: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async pageChangeHandler(selectedPage) {
      if (this.getTermFromState) {
        //if term for search exist, go to next page for explicit term
        await this.startFetchNextPageForSearchedTerm({
          term: this.getTermFromState,
          page: selectedPage,
        });
      } else {
        await this.startFetchNextPage(selectedPage);
      }
    },
  },
};
</script>
<style scoped>
@import "~vue-sliding-pagination/dist/style/vue-sliding-pagination.css";
</style>
