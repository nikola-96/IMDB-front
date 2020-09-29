<template>
  <div>
    <h2>Create movie</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-wraper">
        <div class="form-group row input">
          <label for="title" class="col-sm-2 col-form-label">Title:</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="movie.title"
              required
            />
          </div>
        </div>
        <div class="form-group row input">
          <label for="description" class="col-sm-2 col-form-label"
            >Description:</label
          >
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="description"
              v-model="movie.description"
              required
            />
          </div>
        </div>
        <div class="form-group row input">
          <label for="image_url" class="col-sm-2 col-form-label">Image</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="image_url"
              placeholder="url"
              v-model="movie.image_url"
            />
          </div>
        </div>
        <div class="form-group row input">
          <label for="colFormLabel" class="col-sm-2 col-form-label"
            >Genre:</label
          >
          <div class="col-sm-12">
            <select class="form-control" v-model="movie.genre_id" required>
              <option></option>
              <option
                class="selelct-option"
                v-for="genre in genres"
                :key="genre.id"
                :value="genre.id"
              >
                {{ genre.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="file">Add image</label>
            <input
              type="file"
              ref="file"
              class="form-control-file"
              id="file"
              @change="handleFileUpload"
            />
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
  props: {
    genres: {
      type: Array,
      required: true,
    },
    postMovie: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async handleSubmit() {
      await this.postMovie(this.movie);
      this.movie = {};
    },
    handleFileUpload(e) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        this.movie.image = e.target.result;
      };
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
</style>
