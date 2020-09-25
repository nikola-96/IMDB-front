<template>
  <div>
    <h2>Create movie</h2>
    <form>
      <div class="form-wraper">
        <div class="form-group row input">
          <label for="title" class="col-sm-2 col-form-label">Title:</label>
          <div class="col-sm-12">
            <input type="text" class="form-control" id="title" />
          </div>
        </div>
        <div class="form-group row input">
          <label for="description" class="col-sm-2 col-form-label"
            >Description:</label
          >
          <div class="col-sm-12">
            <input type="text" class="form-control" id="description" />
          </div>
        </div>
        <div class="form-group row input">
          <label for="text" class="col-sm-2 col-form-label">Image</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="url"
            />
          </div>
        </div>
        <div class="form-group row input">
          <label for="colFormLabel" class="col-sm-2 col-form-label"
            >Genre:</label
          >
          <div class="col-sm-12">
            <select class="form-control">
              <option>Select</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "MovieFormComponent",
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
</style>
