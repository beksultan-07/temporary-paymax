<template>
  <v-menu v-show="$auth.loggedIn" max-width="300" offset-x offset-y bottom center content-class="mt-5" transition="slide-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation="0" icon v-bind="attrs" v-on="on">
        <v-icon>
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <template v-if="$auth.loggedIn">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ $auth.$state.user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ $auth.$state.user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" nuxt>
          <v-icon size="30">
            {{ item.icon }}
          </v-icon>
          <v-list-item-title class="ml-2">{{ $vuetify.lang.t(`$vuetify.${item.title}`) }}</v-list-item-title>
        </v-list-item>
        <v-divider class="my-2" />
        <v-list-item @click="this.setLogout" link>
          <v-icon size="30">
            mdi-alpha-l-circle-outline
          </v-icon>
          <v-list-item-title class="ml-2">{{ $vuetify.lang.t('$vuetify.lang_8') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    name: "v-component-menu-account",
    data() {
      return {
        items: [
          {icon: 'mdi-alpha-a-circle-outline', title: 'lang_79', to: '/assets'}
        ],
      }
    },
    methods: {
      setLogout() {
        this.$auth.logout({ data: {refresh: this.$auth.$storage['_state']['_refresh_token.local']}}).then(() => {
          this.$router.push('/');
        });
      }
    }
  }
</script>

<style scoped>

</style>
