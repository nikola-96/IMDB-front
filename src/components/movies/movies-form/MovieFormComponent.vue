<template>
  <div>
    <div class="btn-heading">
      <h2>Create movie</h2>
      <button
        type="button"
        class="btn btn-light btn-ombd"
        @click="handleFetchigMovie"
      >
        from OMBd
      </button>
    </div>
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
              placeholder="Enter title, and push button OMBd for fetching movie."
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
            <select class="form-control" v-model="movie.genre_id">
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
        </div>
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  </div>
</template>
<script>
import omdbService from "../../../services/OmbdService";

export default {
  name: "MovieFormComponent",
  data() {
    return {
      movie: {},
      ombdMovie: {},
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
    },
    async handleFetchigMovie() {
      this.ombdMovie = await omdbService.getMovieFromOmbd(this.movie.title);
      if (this.ombdMovie.Error) {
        alert(this.ombdMovie.Error);
      } else {
        this.movie.title = this.ombdMovie.Title;
        this.movie.description = this.ombdMovie.Plot;
        this.movie.image_url = this.ombdMovie.Poster;
        this.movie.genre_id = this.getIdFroGenre(
          this.ombdMovie.Genre.split(", ")[0]
        )[0].id;
      }
    },
    getIdFroGenre(gen) {
      return this.genres.filter((genre) => {
        if (genre.name == gen.toLowerCase()) {
          return genre.id;
        }
      });
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
.btn-ombd {
  margin-left: 10px;
}
</style>
