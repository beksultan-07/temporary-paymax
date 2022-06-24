<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1">

      <!-- Start: assets list component -->
      <v-col class="pa-1" cols="12" md="3" sm="6">
        <v-component-assets />
      </v-col>
      <!-- End: assets list component -->

      <!-- Start: child container -->
      <v-col class="pa-1" cols="12" md="9" sm="6">
        <nuxt-child />
      </v-col>
      <!-- End: child container -->

    </v-row>

  </section>
</template>

<script>

  import Assets from "../components/Asset/Assets";

  export default {
    auth: true,
    components: {
      'v-component-assets': Assets
    }
  }
</script>
