<template>
  <v-app>
    <navbar/>
    <v-main id="scrolling-techniques" style="height: 100px;" class="overflow-y-auto">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "~/components/Market/Navbar";

export default {
  components:{Navbar},
  name: "marketlayout"
}
</script>

<style scoped>
</style>