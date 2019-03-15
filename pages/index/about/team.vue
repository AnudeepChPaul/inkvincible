<template>
  <v-container fluid class="team-page">
    <v-layout text-xs-center wrap justify-space-around>
      <v-flex mb-6 class="ma-2">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
      <v-flex mb-6 class="ma-2">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center wrap>
      <v-flex mb-6 class="ma-2">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
      <v-flex mb-6 class="ma-2">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data: () => ({})
};
</script>

<style lang="scss">
  .team-page {
    .dummy-container {
      margin: 5px;
      height: 160px;
    }
  }
</style>
