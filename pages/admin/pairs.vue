<template>
  <div>

    <!-- Start: pairs component -->
    <v-component-pairs />
    <!-- End: pairs component -->

  </div>
</template>

<script>
  import Pairs from "../../components/Admin/Pairs";

  export default {
    components: {
      'v-component-pairs': Pairs
    }
  }
</script>

<style scoped>

</style>