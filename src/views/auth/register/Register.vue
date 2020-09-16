<template>
  <div>
    <RegisterForm :startPostUser="startPostUser" />
  </div>
</template>
<script>
import RegisterForm from "@/components/auth/register/RegisterForm";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
  methods: {
    ...mapActions(["startPostUser"]),
  },
  computed: {
    ...mapGetters(["getErrorsFromState"]),
  },
};
</script>