<template>
  <v-container fluid>
    <Portfolio/>
  </v-container>
</template>
<script>
import Portfolio from "@/components/Portfolio.vue";
export default {
  components: {
    Portfolio
  },
  created() {
    this.$store.dispatch("portfolio/init_state");
  }
};
</script>

