<template>

  <div>


    <nuxt-link :to="'/admin/currencies/usdt/details'">USDT</nuxt-link>


    <!-- Start: child container -->
    <nuxt-child style="height: 100%" />
    <!-- End: child container -->

  </div>

</template>

<script>
export default {
  name: "currencies"
}
</script>

<style scoped>

</style>