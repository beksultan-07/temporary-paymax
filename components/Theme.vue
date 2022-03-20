<template>
  <span>
    <template v-if="this.$vuetify.theme.dark">
      <v-btn @click="setTheme" icon>
        <v-icon>
          mdi-brightness-1
        </v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn @click="setTheme" icon>
        <v-icon>
          mdi-brightness-3
        </v-icon>
      </v-btn>
    </template>
  </span>
</template>

<script>
export default {
  name: "v-component-theme",
  mounted() {
    this.getTheme();
  },
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.commit('localStorage/setTheme', !this.$store.state.localStorage.dark);

      // Trading view widget change theme.
      if (window.tvWidget !== undefined && this.$route.name === 'trade-exchange') {
        window.tvWidget.changeTheme(this.$vuetify.theme.dark ? "Dark" : "Light");
      }
    },
    getTheme() {
      this.$vuetify.theme.dark = this.$store.state.localStorage.dark;
    }
  }
}
</script>
