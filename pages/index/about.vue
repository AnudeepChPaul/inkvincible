<template>
  <v-container fluid class="about-page">
    <v-layout text-xs-center wrap justify-center>
      <v-flex mb-12>
        <v-container fluid class="dummy-container"></v-container>
        <v-container class="title-button-wrapper" justify-center>
          <v-btn
            v-for="(button, index) in $store.getters['about/get_about_buttons']"
            :key="index"
            :color="button.color"
            :to="button.goto"
          >
            <span>{{button.text}}</span>
          </v-btn>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center wrap class="about-router-wrapper">
      <!-- <v-container fluid class="dummy-container"> -->
      <!-- <router-view></router-view> -->
      <nuxt-child/>
      <!-- </v-container> -->
    </v-layout>
  </v-container>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
export default {
  components: {
    Toolbar
  },
  middleware: [
    'init-about-state'
  ],
  created() {
    // debugger
    // this.$store.dispatch("about/init_state").then(() => {
    //   // this.$route.name === "index-about" &&
    //   //   this.$router.push({
    //   //     path: this.$store.getters["about/get_first_button"].goto
    //   //   });
    // });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.about-page {
  .dummy-container {
    height: 250px;
  }
  .title-button-wrapper {
    padding: 0px;
    margin-top: -23px;
  }
  .about-router-wrapper {
    margin-top: 30px;
  }
  .v-btn--active {
    opacity: 0.75;
  }
}
</style>
