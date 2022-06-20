<template>
  <div>

    <!-- Start: chains component -->
    <v-component-chains />
    <!-- End: chains component -->

    <!-- Start: child container -->
    <nuxt-child style="height: 100%" />
    <!-- End: child container -->

  </div>
</template>

<script>
  import Chains from "../../components/Admin/Chsins";

  export default {
    components: {
      'v-component-chains': Chains
    }
  }
</script>

<style scoped>

</style>