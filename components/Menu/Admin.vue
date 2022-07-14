<template>
  <v-list dense>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in navs" :class="item.to === $route.params.settings ? 'v-list-item--active' : ''"  :key="i" :to="`/admin/${item.to}`" exact link>
        <v-list-item-icon class="mr-3">
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          {{ item.title }}
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
  export default {
    name: "v-component-menu-admin",
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
            icon: "mdi-priority-high",
            to: 'currencies'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_179'),
            icon: "mdi-upload-network-outline",
            to: 'chains'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_180'),
            icon: "mdi-arrange-send-to-back",
            to: 'pairs'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_182'),
            icon: "mdi-ballot-recount-outline",
            to: 'contracts'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_181'),
            icon: "mdi-account-circle-outline",
            to: 'accounts'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_79'),
            icon: "mdi-notebook-plus-outline",
            to: 'assets'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_273'),
            icon: "mdi-transfer",
            to: 'transactions'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_183'),
            icon: "mdi-radar",
            to: 'orders'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_83'),
            icon: "mdi-package-variant-closed-plus",
            to: 'listing'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_185'),
            icon: "mdi-page-next-outline",
            to: 'news'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_266'),
            icon: "mdi-presentation-play",
            to: 'advertising'
          }, {
            title: this.$vuetify.lang.t('$vuetify.lang_186'),
            icon: "mdi-robot-excited-outline",
            to: 'support'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>