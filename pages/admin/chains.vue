<template>
  <div>

    <!-- Start: chains component -->
    <v-component-chains />
    <!-- End: chains component -->

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