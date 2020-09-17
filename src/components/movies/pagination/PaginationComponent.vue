<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="fetchNextPage()">Next</a>
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
  methods: {
    fetchNextPage() {
      if (this.movies.next_page_url) {
        this.startFetchNextPage(this.movies.current_page + 1);
      }
    },
  },
};
</script>