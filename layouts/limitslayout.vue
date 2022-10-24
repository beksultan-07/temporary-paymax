<template>
  <v-app>
    <limits-navbar/>
    <v-main id="scrolling-techniques" style="height: 100px;" class="overflow-y-auto">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import LimitsNavbar from "@/components/Market/Navbars/LimitsNavbar";

export default {
  components:{LimitsNavbar},
  name: "limits-layout"
}
</script>

<style scoped>
</style>