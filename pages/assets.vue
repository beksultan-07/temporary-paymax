<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: assets list component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-asset-list />
      </v-col>
      <!-- End: assets list component -->

      <!-- Start: child container -->
      <v-col cols="12" md="9" sm="6">
        <nuxt-child />
      </v-col>
      <!-- End: child container -->

    </v-row>

  </section>
</template>

<script>

  import AssetList from "../components/Asset/AssetList";

  export default {
    auth: true,
    name: "assets",
    components: {
      'v-component-asset-list': AssetList
    }
  }
</script>
