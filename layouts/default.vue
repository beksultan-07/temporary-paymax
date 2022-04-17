<template>
  <v-app>
    <v-app-bar fixed elevate-on-scroll scroll-target="#scrolling-techniques" style="z-index: 6;" app>
      <v-toolbar-title>
        <b class="mx-2"><nuxt-link :class="($vuetify.theme.dark ? 'white' : 'black') + '--text text-decoration-none'" to="/">EXCHANGE</nuxt-link></b>
      </v-toolbar-title>
      <v-divider class="mx-4" inset vertical />
      <v-component-menu-default />
      <v-spacer />
      <v-toolbar-items v-show="!$auth.loggedIn" class="hidden-sm-and-down">
        <v-btn class="text-capitalize" to="/signin" text>{{ $vuetify.lang.t('$vuetify.lang_29') }}</v-btn>
        <v-btn class="text-capitalize" to="/signup" text>{{ $vuetify.lang.t('$vuetify.lang_30') }}</v-btn>
      </v-toolbar-items>
      <v-divider class="mx-4 hidden-sm-and-down" inset vertical />
      <client-only>
      <template v-if="$auth.loggedIn">
        <v-component-menu-account />
      </template>
      </client-only>
      <v-component-language />
      <v-divider class="mx-4" inset vertical />
      <v-component-theme />
    </v-app-bar>
    <v-main id="scrolling-techniques" style="height: 100px" class="overflow-y-auto">
      <Nuxt />
      <v-component-footer />
    </v-main>
    <v-component-snackbar />
  </v-app>
</template>

<script>

  import Theme from '~/components/Theme';
  import Language from '~/components/Language';
  import Snackbar from '~/components/Snackbar';
  import MenuDefault from '~/components/Menu/Default';
  import MenuAccount from '~/components/Menu/Account';
  import Footer from '~/components/Footer';

  export default {
    name: 'layouts-default',
    components: {
      'v-component-theme': Theme,
      'v-component-language': Language,
      'v-component-snackbar': Snackbar,
      'v-component-menu-default': MenuDefault,
      'v-component-menu-account': MenuAccount,
      'v-component-footer': Footer
    },
    mounted() {
      this.$publish.subscribe('exchange', ['order/create', 'order/status', 'order/cancel', 'withdraw/cancel', 'withdraw/create', 'trade/kline'], (error) => {
        console.log(error);
      });
    }
  }
</script>
