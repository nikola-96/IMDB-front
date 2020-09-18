<template>
  <div>
    <AuthNavbar toRoute="Register" />
    <LoginForm :startLoginUser="startLoginUser" />
  </div>
</template>
<script>
import LoginForm from "@/components/auth/login/LoginForm";
import AuthNavbar from "@/components/auth/navbar/AuthNavbar";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    LoginForm,
    AuthNavbar,
  },
  methods: {
    ...mapActions(["startLoginUser"]),
  },
};
</script>