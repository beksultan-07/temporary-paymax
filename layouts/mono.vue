<template>
  <v-app>
    <v-app-bar color="transparent" absolute flat app>
      <v-toolbar-title>
        <b class="mx-2"><nuxt-link :class="(this.$vuetify.theme.dark ? 'white' : 'black') + '--text text-decoration-none'" to="/">EXCHANGE <span class="red--text">BETA</span></nuxt-link></b>
      </v-toolbar-title>
      <v-divider class="mx-4" inset vertical />
      <v-component-menu-default />
      <v-spacer />
      <v-component-language />
      <v-divider class="mx-4" inset vertical />
      <v-component-theme />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-component-footer />
    <v-component-snackbar />
  </v-app>
</template>

<script>

  import Theme from '~/components/Theme';
  import Language from '~/components/Language';
  import Snackbar from '~/components/Snackbar';
  import MenuDefault from '~/components/Menu/Default';
  import Footer from '~/components/Footer';

  export default {
    name: 'layouts-mono',
    components: {
      'v-component-theme': Theme,
      'v-component-language': Language,
      'v-component-snackbar': Snackbar,
      'v-component-menu-default': MenuDefault,
      'v-component-footer': Footer
    }
  }

</script>
