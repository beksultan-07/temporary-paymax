<template>
  <v-component-inner>

    <template v-if="name === 'admin-currencies'">

      <!-- Start: header bar -->
      <div class="ma-2">
        <v-row>
          <v-col cols="12" md="4">
            <v-btn color="black--text grey lighten-5 text-capitalize" elevation="0" large :to="'/admin/currencies/create/editor'">
              <v-icon color="green">mdi-plus-thick</v-icon> {{ $vuetify.lang.t('$vuetify.lang_195') }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="search" v-on:keyup="getCurrencies" color="primary" :label="$vuetify.lang.t('$vuetify.lang_209')" outlined dense hide-details />
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="black--text grey lighten-5 text-capitalize" elevation="0" large class="float-end">
              {{ count }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <!-- End: header bar -->

      <v-divider />

      <template v-if="currencies.length">

        <!-- Start: data table -->
        <v-data-table :headers="headlines" :items="currencies" :page.sync="page" item-key="id" :items-per-page="limit" hide-default-footer>
          <template v-slot:item.symbol="{ item }">
            <v-avatar size="30">
              <v-img :src="$storages(['icon'], item.symbol)" />
            </v-avatar>
            <b>{{ item.symbol.toUpperCase() }}</b>
          </template>
          <template v-slot:item.name="{ item }">
            <div>
              {{ item.name }}
            </div>
            <div>
              <small class="grey--text">ID: {{ item.id }}</small>
            </div>
          </template>
          <template v-slot:item.fin_type="{ item }">
            <template v-if="item.fin_type">
              Fiat
            </template>
            <template v-else>
              Crypto
            </template>
          </template>
          <template v-slot:item.fees_charges="{ item }">
            {{ $decimal.truncate(item.fees_charges) }} <b>{{ item.symbol.toUpperCase() }}</b>
          </template>
          <template v-slot:item.marker="{ item }">
            <template v-if="item.marker">
              <v-icon color="green">
                mdi-crown-outline
              </v-icon>
            </template>
            <template v-else>
              <v-icon color="red">
                mdi-label-outline
              </v-icon>
            </template>
          </template>
          <template v-slot:item.status="{ item }">
            <template v-if="item.status">
              <v-icon color="green">
                mdi-check-circle-outline
              </v-icon>
            </template>
            <template v-else>
              <v-icon color="red">
                mdi-close-circle-outline
              </v-icon>
            </template>
          </template>
          <template v-slot:item.create_at="{ item }">
            <div>
              {{ $moment(item.create_at).format('DD MMM') }}
            </div>
            <div>
              <small class="grey--text">{{ $moment(item.create_at).format('hh:mm:ss') }}</small>
            </div>
          </template>
          <template v-slot:item.update_at="{ item }">
            <div>
              {{ $moment(item.update_at).format('DD MMM') }}
            </div>
            <div>
              <small class="grey--text">{{ $moment(item.update_at).format('hh:mm:ss') }}</small>
            </div>
          </template>
          <template v-slot:item.edit="{ item }">
            <v-btn :to="`/admin/currencies/${item.symbol}/editor`" icon>
              <v-icon>
                mdi-circle-edit-outline
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <!-- End: data table -->

        <v-divider />

        <!-- Start: pagination -->
        <v-container v-if="length > 1" class="max-width">
          <v-row justify="center">
            <v-col cols="8">
              <v-pagination v-model="page" @input="getMore()" :length="length"></v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <!-- End: pagination -->

      </template>

      <!-- Start: no history -->
      <template v-else-if="!overlay">
        <v-layout fill-height wrap>
          <v-flex/>
          <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
            <v-img class="ma-auto" width="250" src="/asset/3.png" />
            <template v-if="search">
              <h2>{{ $vuetify.lang.t('$vuetify.lang_210') }}</h2>
              {{ $vuetify.lang.t('$vuetify.lang_211') }}
            </template>
            <template v-else>
              <h2>{{ $vuetify.lang.t('$vuetify.lang_196') }}</h2>
              {{ $vuetify.lang.t('$vuetify.lang_197') }}
            </template>
          </v-flex>
          <v-flex/>
        </v-layout>
      </template>
      <!-- End: no history -->

      <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
        <v-progress-circular color="yellow darken-3" indeterminate size="50" />
      </v-overlay>

    </template>

    <!-- Start: child container -->
    <nuxt-child style="height: 100%" />
    <!-- End: child container -->

  </v-component-inner>
</template>

<script>
  import Api from "@/libs/api";
  import Inner from "~/components/Common/Inner";

  export default {
    name: "v-component-currencies",
    components: {
      'v-component-inner': Inner
    },
    data() {
      return {
        search: "",
        name: "",
        currencies: [],
        overlay: true,
        limit: 15,
        count: 0,
        length: 0,
        page: 1
      }
    },
    watch: {
      $route(params) {
        this.name = params.name;
        this.getCurrencies();
      }
    },
    mounted() {
      this.name = this.$route.name;
      this.getCurrencies();
    },
    methods: {

      /**
       *
       */
      getCurrencies() {
        this.overlay = true;

        this.$axios.$post(Api.admin.exchange.getCurrencies, {
          search: this.search,
          limit: this.limit,
          page: this.page
        }).then((response) => {
          this.currencies = response.currencies ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/this.limit);
          this.overlay = false;
        });
      },

      /**
       *
       */
      getMore() {
        this.getCurrencies();
      }
    },
    computed: {

      /**
       * @returns {[{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},null,null]}
       */
      headlines() {
        return [
          {
            text: this.$vuetify.lang.t('$vuetify.lang_187'),
            align: 'start',
            sortable: false,
            value: 'symbol'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_188'),
            align: 'start',
            sortable: false,
            value: 'name'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_208'),
            align: 'start',
            sortable: true,
            value: 'fin_type'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_189'),
            align: 'start',
            sortable: true,
            value: 'fees_charges'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_190'),
            align: 'start',
            sortable: true,
            value: 'marker'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_191'),
            align: 'start',
            sortable: true,
            value: 'status'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_192'),
            align: 'start',
            sortable: true,
            value: 'create_at'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_193'),
            align: 'start',
            sortable: true,
            value: 'update_at'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_194'),
            align: 'start',
            sortable: false,
            value: 'edit'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>