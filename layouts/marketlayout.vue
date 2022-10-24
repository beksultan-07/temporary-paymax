<template>
  <v-app>
    <navbar/>
    <v-main id="scrolling-techniques" style="height: 100px;" class="overflow-y-auto">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Market/Navbars/Navbar";

export default {
  components:{Navbar},
  name: "market-layout"
}
</script>

<style scoped>
</style>