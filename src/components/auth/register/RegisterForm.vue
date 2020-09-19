<template>
  <div>
    <div class="register">
      <h2 class="title">Please register</h2>
      <form class="register-form" @submit.prevent="handleSubmit">
        <div class="gruop">
          <input
            class="form-input"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name:"
            v-model="user.name"
          />
        </div>
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
        <div class="gruop">
          <input
            class="form-input"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="Please confirm your password:"
            v-model="user.password_confirmation"
          />
        </div>
        <button class="btn-submit btn btn-secondary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
  props: {
    startRegisterUser: {
      type: Function,
      requred: true,
    },
  },
  methods: {
    handleSubmit() {
      this.startRegisterUser(this.user, "Register");
      this.$router.push("/login");
    },
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style scoped>
.register-form {
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
