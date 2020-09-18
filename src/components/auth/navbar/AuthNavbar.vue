<template>
  <div id="nav">
    <router-link :to="{name: toRoute}">{{toRoute}}</router-link>
  </div>
</template>
<script>
export default {
  name: "AuthNavbar",
  props: {
    toRoute: {
      type: String,
      reqired: true,
    },
  },
};
</script>
<style >
</style>