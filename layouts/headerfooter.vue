<template>
  <v-app dark>
    <v-content class="default-layout-wrapper">
      <v-container fluid>
        <Toolbar/>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer fixed app dark>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
export default {
  components: {
    Toolbar
  },
  data: () => ({})
};
</script>
<style lang="stylus">
.default-layout-wrapper {
  padding: 56px 0 0 0 !important;
}
</style>

