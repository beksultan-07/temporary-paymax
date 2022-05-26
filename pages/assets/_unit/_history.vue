<template>
  <div>

    <!-- Start: tabs bar -->
    <v-tabs class="px-4 my-4" color="primary">
      <v-tab exact :to="'/assets/' + $route.params.unit + '/history'" nto="?type=2" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_64') }}</v-tab>
      <v-tab exact :to="'/assets/' + $route.params.unit + '/history/withdraw'" nto="?type=1" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_121') }}</v-tab>
      <v-tab exact :to="'/assets/' + $route.params.unit + '/history/deposit'" nto="?type=0" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_120') }}</v-tab>
    </v-tabs>
    <!-- End: tabs bar -->

    <v-divider />

    <!-- Start: child container -->
    <nuxt-child style="height: 100%" />
    <!-- End: child container -->

  </div>
</template>

<script>
  export default {
    name: "history"
  }
</script>

<style scoped>

</style>
