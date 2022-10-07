<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
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