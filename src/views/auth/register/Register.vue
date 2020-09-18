<template>
  <div>

    <AuthNavbar toRoute="Login" />
    <RegisterForm :startRegisterUser="startRegisterUser" />
  </div>
</template>
<script>
import RegisterForm from "@/components/auth/register/RegisterForm";

import AuthNavbar from "@/components/auth/navbar/AuthNavbar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  components: {
    RegisterForm,
    AuthNavbar,
  },
  methods: {
    ...mapActions(["startRegisterUser"]),
  },
  computed: {
    ...mapGetters(["getErrorsFromState"]),
  },
};
</script>