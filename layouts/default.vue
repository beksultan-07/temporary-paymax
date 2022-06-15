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
      <template v-if="$auth.loggedIn">
        <v-btn to="/admin" v-if="admin" :color="$vuetify.theme.dark ? '' : 'deep-purple lighten-4'" elevation="0" icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon :color="$vuetify.theme.dark ? '' : 'grey darken-1'" v-bind="attrs" v-on="on">
                mdi-shield-lock-open-outline
              </v-icon>
            </template>
            <span>{{ $vuetify.lang.t('$vuetify.lang_177') }}</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-divider class="mx-4 hidden-sm-and-down" inset vertical />
      <client-only>
        <template v-if="$auth.loggedIn">
          <v-component-menu-private />
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
  import MenuPrivate from '~/components/Menu/Private';
  import Footer from '~/components/Footer';

  export default {
    name: 'layouts-default',
    components: {
      'v-component-theme': Theme,
      'v-component-language': Language,
      'v-component-snackbar': Snackbar,
      'v-component-menu-default': MenuDefault,
      'v-component-menu-private': MenuPrivate,
      'v-component-footer': Footer
    },
    data() {
      return {
        channels: ['order/create', 'order/status', 'order/cancel'],
        interval: [0, 60, 300, 600, 900, 1800, 3600, 14400, 86400, 604800],
        admin: false
      }
    },
    mounted() {
      this.interval.map((interval) => {
        this.channels.push('trade/graph:' + interval);
      });
      this.$publish.subscribe('exchange', this.channels, (error) => {
        console.log(error);
      });
      this.isAdmin();
    },
    methods: {
      isAdmin() {
        if (this.$auth.$state.user) {
          let roles = this.$auth.$state.user.rules ?? []
          this.admin = roles.length > 0;
        }
      }
    }
  }
</script>
