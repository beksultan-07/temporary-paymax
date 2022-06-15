<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: assets list component -->
      <v-col cols="12" md="3" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-inner>
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in navs" :class="item.to === $route.params.settings ? 'v-list-item--active' : ''"  :key="i" :to="`/account/${item.to}`" exact link>
                  <v-list-item-icon class="mr-3">
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    {{ item.title }}
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-component-inner>
        </v-card>
      </v-col>
      <!-- End: assets list component -->

      <!-- Start: child container -->
      <v-col cols="12" md="9" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-inner>
            <nuxt-child />
          </v-component-inner>
        </v-card>
      </v-col>
      <!-- End: child container -->

    </v-row>

  </section>
</template>

<script>
  import Inner from "~/components/Common/Inner";

  export default {
    auth: true,
    components: {
      'v-component-inner': Inner
    },
    computed: {

      /**
       * @returns {[{title: string, to: string},{title: string, to: string},{title: string, to: string}]}
       */
      navs() {
        return [
          {
            title: this.$vuetify.lang.t('$vuetify.lang_143'),
            icon: "mdi-alpha-p-circle-outline",
            to: 'profile'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_144'),
            icon: "mdi-alpha-s-circle-outline",
            to: 'security'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_145'),
            icon: "mdi-alpha-n-circle-outline",
            to: 'notification'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_161'),
            icon: "mdi-alpha-a-circle-outline",
            to: 'activities'
          }
        ]
      }
    }
  }
</script>
