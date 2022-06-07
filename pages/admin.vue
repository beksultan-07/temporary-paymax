<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: assets list component -->
      <v-col cols="12" md="3" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-fullscreen>
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in navs" :class="item.to === $route.params.settings ? 'v-list-item--active' : ''"  :key="i" :to="`/admin/${item.to}`" exact link>
                  <v-list-item-content>
                    {{ item.title }}
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-component-fullscreen>
        </v-card>
      </v-col>
      <!-- End: assets list component -->

      <!-- Start: child container -->
      <v-col cols="12" md="9" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-fullscreen>
            <nuxt-child />
          </v-component-fullscreen>
        </v-card>
      </v-col>
      <!-- End: child container -->

    </v-row>

  </section>
</template>

<script>
  import Fullscreen from "~/components/Common/Fullscreen";

  export default {
    auth: true,
    middleware: ['rules'],
    name: "admin",
    components: {
      'v-component-fullscreen': Fullscreen
    },
    mounted() {
      this.rules();
    },
    methods: {
      rules() {
        let rules = this.$auth.user.rules;
        this.navs.map((item, index) => {
          if (rules.indexOf(item.to) === -1) {
            this.navs.splice(index, 1);
          }
        });
        this.$forceUpdate();
      }
    },
    computed: {

      /**
       * @returns {[{title: string, to: string},{title: string, to: string},{title: string, to: string}]}
       */
      navs() {
        return [
          {
            title: this.$vuetify.lang.t('$vuetify.lang_178'),
            to: 'currencies'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_179'),
            to: 'chains'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_180'),
            to: 'pairs'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_181'),
            to: 'accounts'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_182'),
            to: 'contracts'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_79'),
            to: 'assets'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_183'),
            to: 'orders'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_184'),
            to: 'listing'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_185'),
            to: 'news'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_186'),
            to: 'support'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>