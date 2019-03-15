<template>
  <v-toolbar app color="primary">
    <v-toolbar-title class="headline">
      <router-link
        :to="$store.getters['app/get_default_route']"
        class="app-title"
      >{{$store.getters["app/get_title"]}}</router-link>
      <span class="font-weight-light secondary--text caption">{{$store.getters["app/get_subtitle"]}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="secondary" to="/about" flat>
      <span class="mr-2">About</span>
    </v-btn>
  </v-toolbar>
</template>

<style lang="scss" scoped>
.app-title {
  text-decoration: none;
}
.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  background-color: transparent;
}

.v-btn {
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  text-transform: none;

  &.v-btn--active {
    border-bottom: 2px solid var(--v-secondary-base);
    border-radius: 0;
  }
}
</style>


<script>
export default {

}
</script>

