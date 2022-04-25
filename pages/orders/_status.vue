<template>
  <v-card class="ma-1" elevation="0">

    <v-component-fullscreen>

      <!-- Start: tabs bar -->
      <v-tabs color="primary">
        <v-tab exact :to="'/orders/' + $route.params.status">{{ $vuetify.lang.t('$vuetify.lang_64') }}</v-tab>
        <v-tab exact :to="'/orders/' + $route.params.status + '/sale'">{{ $vuetify.lang.t('$vuetify.lang_140') }}</v-tab>
        <v-tab exact :to="'/orders/' + $route.params.status + '/purchase'">{{ $vuetify.lang.t('$vuetify.lang_141') }}</v-tab>
      </v-tabs>
      <!-- End: tabs bar -->

      <v-divider />

      <!-- Start: child container -->
      <nuxt-child style="height: 100%" />
      <!-- End: child container -->

    </v-component-fullscreen>

  </v-card>
</template>

<script>
  import Fullscreen from "@/components/Common/Fullscreen";

  export default {
    name: "orders",
    components: {
      'v-component-fullscreen': Fullscreen
    }
  }
</script>

<style scoped>

</style>