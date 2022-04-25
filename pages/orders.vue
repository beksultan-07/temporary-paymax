<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: assets list component -->
      <v-col cols="12" md="3" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-fullscreen>
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in navs" :class="item.status === $route.params.status ? 'v-list-item--active' : ''"  :key="i" :to="`/orders/${item.status}`" exact link>
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
        <nuxt-child />
      </v-col>
      <!-- End: child container -->

    </v-row>

  </section>
</template>

<script>
  import Fullscreen from "~/components/Common/Fullscreen";

  export default {
    auth: true,
    name: "orders",
    components: {
      'v-component-fullscreen': Fullscreen
    },
    computed: {

      /**
       * @returns {[{title: string, status: string},{title: string, status: string},{title: string, status: string}]}
       */
      navs() {
        return [
          {
            title: this.$vuetify.lang.t('$vuetify.lang_138'),
            status: 'all'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_136'),
            status: 'pending'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_137'),
            status: 'filled'
          }
        ]
      }
    }
  }
</script>
