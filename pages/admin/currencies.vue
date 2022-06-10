<template>
  <div>

    <!-- Start: currencies component -->
    <v-component-currencies />
    <!-- End: currencies component -->

  </div>
</template>

<script>
  import Currencies from "../../components/Admin/Currencies";

  export default {
    name: "currencies",
    components: {
      'v-component-currencies': Currencies
    }
  }
</script>

<style scoped>

</style>