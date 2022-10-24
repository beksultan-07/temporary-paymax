<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="text-caption black--text" elevation="0" color="white" dark v-bind="attrs" v-on="on">
        Envoys.Vision <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          @click="$store.commit('settingsPage/setCurrentComponent', link.component); $router.push('/settings')"
          dense
          link
          v-for="link in $store.getters['settingsPage/getLinks']"
          :key="link.component"
      >
        <v-list-item-title>{{link.text}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "NavbarDropdown"
}
</script>

<style scoped>

</style>