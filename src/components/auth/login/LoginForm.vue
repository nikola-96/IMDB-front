<template>
  <div>
    <h2 class="title">Please login</h2>
    <form class="login-form" @submit.prevent="handleSubmit">
      <div class="gruop">
        <input
          class="form-input"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email:"
          v-model="user.email"
        />
      </div>
      <div class="gruop">
        <input
          class="form-input"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password:"
          v-model="user.password"
        />
      </div>
      <button class="btn-submit btn btn-secondary" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {},
    };
  },
  props: {
    startLoginUser: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      this.startLoginUser(this.user);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.login-form {
  margin: 50px 0 0 0;
}
.form-input {
  width: 300px;
  margin: 10px 0 0 0;
}
.btn-submit {
  margin: 15px 0 0 0;
}
.btn-register {
  margin: 15px 0 0 150px;
}
</style>
