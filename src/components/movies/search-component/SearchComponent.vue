
<template>
  <div>
    <input v-debounce:750ms="myFunc" type="text" />
  </div>
</template>
<script>
import Vue from "vue";
import vueDebounce from "vue-debounce";

Vue.use(vueDebounce);

export default {
  name: "SearchComponent",
  methods: {
    myFunc() {
      console.log("radi");
    },
  },
};
</script>