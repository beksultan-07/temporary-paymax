<template>
  <div class="px-3 mt-3">

    <v-row align="center">
      <v-col cols="12" md="4">
        <v-card height="80" outlined rounded="lg">
          <v-card-title class="mt-2">
            1
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" align-self="center">
        <v-card height="80" outlined rounded="lg">
          <v-card-title class="mt-2">
            2
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" align-self="center">
        <v-card height="80" outlined rounded="lg">
          <v-card-title class="mt-2">
            3
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <!-- Start: chain info form -->
    <v-row>
      <v-col cols="12" md="4">
        1
      </v-col>
      <v-col cols="12" md="4">
        2
      </v-col>
      <v-col cols="12" md="4">
        3
      </v-col>
    </v-row>
    <!-- End: chain info form -->

    <template v-if="$route.params.symbol === 'create'">
      <v-btn block color="black--text yellow darken-1 text-capitalize" elevation="0" large @click="setChain">{{ $vuetify.lang.t('$vuetify.lang_195') }}</v-btn>
    </template>
    <template v-else>
      <v-btn block color="white--text red darken-1 text-capitalize" elevation="0" large @click="setChain">{{ $vuetify.lang.t('$vuetify.lang_204') }}</v-btn>
    </template>

  </div>
</template>

<script>
  import Api from "/libs/api";

  export default {
    data() {
      return {
        chains: {

        }
      }
    },
    mounted() {
      this.getChain();
    },
    methods: {

      /**
       *
       */
      getChain() {
        this.$axios.$post(Api.admin.exchange.getChain, {
          id: (this.$route.params.id !== "create" ? this.$route.params.id : "")
        }).then((response) => {
          if (response.chains) {
            this.chains = Object.assign(this.chains, response.chains[0]);
            console.log(this.chains);
          }
        });
      },

      /**
       *
       */
      setChain() {}
    }
  }
</script>

<style scoped>

</style>