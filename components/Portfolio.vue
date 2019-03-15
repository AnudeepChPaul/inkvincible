<template>
  <v-carousel
    height="600"
    :interval="$store.getters['portfolio/get_each_slide_interval']"
    hide-delimiters
    :cycle="autoCycleImages"
  >
    <v-carousel-item
      v-for="(itm, index) in $store.getters['portfolio/get_portfolios']"
      :key="index"
    >
      <!-- <v-carousel-item
      v-for="(itm, index) in $store.getters['PORTFOLIO/GET_PORTFOLIOS']"
      :key="index"
      :src="itm.src"
      >-->
      <v-container fluid class="dummy-container">
        <v-layout text-xs-right wrap>
          <v-flex xs12 md-12>
            <v-speed-dial
              open-on-hover
              v-model="fabButtonOpened"
              transition="slide-y-transition"
              direction="bottom"
              class="portfolio-fab-actions"
            >
              <template v-slot:activator>
                <v-btn
                  color="primary"
                  v-model="fabButtonOpened"
                  @mouseenter="onMouseOver(itm)"
                  @click="onItemActionClick({role: 'tryit'})"
                >
                  <v-icon>brush</v-icon>
                  <span>Want to Try it ?</span>
                </v-btn>
              </template>
              <v-btn
                fab
                dark
                small
                v-for="(button, index) in $store.getters['portfolio/get_item_actions']"
                :color="button.color"
                :key="index"
                @click="onItemActionClick(button)"
              >
                <v-icon>{{button.icon}}</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      autoCycleImages: true,
      fabButtonOpened: false
    };
  },
  created() {
  },
  methods: {
    getCarouselComponent() {
      return this.$children.filter(el => el.$options.name === "v-carousel")[0];
    },
    onMouseOver(item) {
      console.log(item.src);
      this.autoCycleImages = false;
    },
    onMouseOut() {
      debugger;
    },
    onItemActionClick(button) {
      console.log(button.role);
    }
  }
};
</script>
<style lang="scss">
.portfolio-fab-actions {
  .v-speed-dial__list {
    align-items: flex-end;
  }
}
</style>
