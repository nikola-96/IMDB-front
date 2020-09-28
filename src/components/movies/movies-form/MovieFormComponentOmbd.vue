<template>
  <div>
    <div class="btn-heading">
      <h2>Create movie from OMBd</h2>
    </div>
    <form>
      <div class="form-wraper">
        <div class="form-group row input">
          <label for="title" class="col-sm-2 col-form-label">Title:</label>

          <div class="col-sm-12">
            <input type="text" class="form-control" id="title" required />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "MovieFormComponent",
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    async handleSubmit() {
      await this.postMovie(this.movie);
      this.movie = {};
    },
  },
};
</script>
<style scoped>
.form-wraper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 400px;
}
select {
  text-transform: capitalize;
}
.btn-heading {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
</style>
