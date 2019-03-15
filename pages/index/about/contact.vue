<template>
  <v-container fluid class="contact-page">
    <v-layout text-xs-center wrap justify-space-around>
      <v-flex mb-4 class="ma-1">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
      <v-flex mb-4 class="mt-1 mb-1 ml-2 mr-2">
        <v-layout text-xs-center wrap justify-space-between column>
          <v-flex>
            <v-container class="dummy-container"></v-container>
          </v-flex>
          <v-flex>
            <v-container class="dummy-container"></v-container>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex mb-4 class="ma-1">
        <v-container fluid class="dummy-container"></v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({})
};
</script>

<style lang="scss">
.contact-page {
  .dummy-container {
    margin: 5px;
    height: 160px;
  }
}
</style>
