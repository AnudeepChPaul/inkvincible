
<template>
  <v-content class="home">
    <nuxt-child/>
  </v-content>
</template>

<style lang="scss" scoped>
.home {
  padding: 0 !important;
}
</style>


<script>
export default {
  layout: "headerfooter",
  middleware: ["init-app-state"]
};
</script>
