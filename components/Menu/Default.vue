<template>
  <v-menu offset-y min-width="auto" nudge-left="50" origin="top center" content-class="mt-5" transition="slide-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation="0" icon v-bind="attrs" v-on="on">
        <v-icon>
          mdi-view-grid-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" link>
          <v-icon size="30">
            {{ item.icon }}
          </v-icon>
          <v-list-item-title class="ml-2">{{ $vuetify.lang.t(`$vuetify.${item.title}`) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>

  export default {
    name: "v-component-menu-default",
    data() {
      return {
        items: [
          {icon: 'mdi-alpha-e-circle-outline', title: 'lang_31', to: '/trade/eth-usdt'}
        ],
      }
    }
  }

</script>

<style scoped>

</style>
