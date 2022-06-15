<template>
  <v-card class="ma-1" elevation="0">

    <v-component-inner>

      <!-- Start: tabs bar -->
      <v-tabs color="primary">
        <v-tab exact :to="'/orders/' + $route.params.status" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_64') }}</v-tab>
        <v-tab exact :to="'/orders/' + $route.params.status + '/sale'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_140') }}</v-tab>
        <v-tab exact :to="'/orders/' + $route.params.status + '/purchase'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_141') }}</v-tab>
      </v-tabs>
      <!-- End: tabs bar -->

      <v-divider />

      <!-- Start: child container -->
      <nuxt-child style="height: 100%" />
      <!-- End: child container -->

    </v-component-inner>

  </v-card>
</template>

<script>
  import Inner from "@/components/Common/Inner";

  export default {
    components: {
      'v-component-inner': Inner
    }
  }
</script>

<style scoped>

</style>