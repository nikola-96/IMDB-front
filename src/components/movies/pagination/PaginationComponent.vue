<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a
            class="page-link"
            tabindex="-1"
            aria-disabled="true"
            @click="fetchPreviousPage"
          >Previous</a>
        </li>
        <li class="page-item" :class="{ disabled : disableNext}">
          <a class="page-link" @click="fetchNextPage">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    movies: {
      type: Object,
      required: true,
    },
    startFetchNextPage: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      disableNext: false,
      disablePrev: true,
    };
  },
  methods: {
    fetchNextPage() {
      this.movies.next_page_url
        ? this.startFetchNextPage(this.movies.current_page + 1)
        : null;
    },
    fetchPreviousPage() {
      this.movies.prev_page_url
        ? this.startFetchNextPage(this.movies.current_page - 1)
        : null;
    },
  },
};
</script>