<template>
  <v-component-inner>

    <template v-if="name === 'admin-chains'">

      <!-- Start: header bar -->
      <div class="ma-2">
        <v-row>
          <v-col cols="12" md="4">
            <v-btn color="black--text grey lighten-5 text-capitalize" elevation="0" large :to="'/admin/chains/create/editor'">
              <v-icon color="green">mdi-plus-thick</v-icon> {{ $vuetify.lang.t('$vuetify.lang_218') }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="4">
            <v-btn color="black--text grey lighten-5 text-capitalize" elevation="0" large class="float-end">
              {{ count }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <!-- End: header bar -->

      <v-divider />

      <template v-if="chains.length">

        <!-- Start: data table -->
        <v-data-table :headers="headlines" :items="chains" :page.sync="page" item-key="id" :items-per-page="limit" hide-default-footer show-expand single-expand>
          <template v-slot:item.data-table-expand="{ item, expand, isExpanded }">
            <template v-if="isExpanded">
              <v-icon @click="expand(!isExpanded)">
                mdi-chevron-up
              </v-icon>
            </template>
            <template v-else>
              <v-icon @click="expand(!isExpanded)">
                mdi-chevron-down
              </v-icon>
            </template>
          </template>
          <template v-slot:item.name="{ item }">
            <div>
              {{ item.name }}
            </div>
            <div>
              <small class="grey--text">ID: {{ item.id }}</small>
            </div>
          </template>
          <template v-slot:item.rpc="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">{{(item.rpc).substr(0, 20) }}{{ item.rpc.length > 20 ? "..." : "" }}</span>
              </template>
              <span>{{ item.rpc }}</span>
            </v-tooltip>
          </template>
          <template v-slot:item.platform="{ item }">
            <template v-if="item.platform">
              <b>{{ item.platform }}</b>
            </template>
            <template v-else>
              <b>BITCOIN</b>
            </template>
          </template>
          <template v-slot:item.fees_withdraw="{ item }">
            {{ item.fees_withdraw }} <b>{{ $platform.getSymbol(item.platform) }}</b>
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
          <template v-slot:item.edit="{ item }">
            <v-btn icon>
              <v-icon>
                mdi-circle-edit-outline
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:item.delete="{ item }">
            <v-btn icon>
              <v-icon>
                mdi-close-circle-outline
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-row align="center">
                <v-col cols="12" md="4">
                  <v-card class="my-4" outlined elevation="0">
                    <v-card-title>
                      {{ $vuetify.lang.t('$vuetify.lang_220') }}
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                      {{ item.block ? item.block : 0 }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="my-4" outlined elevation="0">
                    <v-card-title>
                      {{ $vuetify.lang.t('$vuetify.lang_224') }}
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                      {{ item.explorer_link ? `${item.explorer_link}/{hash}` : "Not explorer link" }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="my-4" outlined elevation="0">
                    <v-card-title>
                      {{ $vuetify.lang.t('$vuetify.lang_223') }}
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                      <template v-if="item.network">
                        <span class="teal--text">{{ item.network }}</span>
                      </template>
                      <template v-else>
                        <span class="red--text">Side chain</span>
                      </template>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>

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
            <h2>{{ $vuetify.lang.t('$vuetify.lang_196') }}</h2>
            {{ $vuetify.lang.t('$vuetify.lang_197') }}
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
  import Inner from "~/components/Common/Inner";
  import Api from "../../libs/api";

  export default {
    name: "v-component-chains",
    components: {
      'v-component-inner': Inner
    },
    data() {
      return {
        name: "",
        chains: [],
        overlay: true,
        limit: 12,
        count: 0,
        length: 0,
        page: 1,
        dialog: false
      }
    },
    watch: {
      $route(params) {
        this.name = params.name;
        this.getChains();
      },
      dialog (val) {
        val || this.close()
      }
    },
    mounted() {
      this.name = this.$route.name;
      this.getChains();
    },
    methods: {

      /**
       *
       */
      getChains() {
        this.overlay = true;

        this.$axios.$post(Api.admin.exchange.getChains, {
          limit: this.limit,
          page: this.page
        }).then((response) => {
          this.chains = response.chains ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/this.limit);
          this.overlay = false;
        });
      },

      /**
       *
       */
      getMore() {
        this.getChains();
      }
    },
    computed: {

      /**
       * @returns {[{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},null,null]}
       */
      headlines() {
        return [
          {
            text: this.$vuetify.lang.t('$vuetify.lang_188'),
            align: 'start',
            sortable: false,
            value: 'name'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_219'),
            align: 'start',
            sortable: false,
            value: 'rpc'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_113'),
            align: 'start',
            sortable: true,
            value: 'platform'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_221'),
            align: 'start',
            sortable: true,
            value: 'fees_withdraw'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_81'),
            align: 'start',
            sortable: true,
            value: 'status'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_194'),
            align: 'start',
            sortable: false,
            value: 'edit'
          }, {
            text: this.$vuetify.lang.t('$vuetify.lang_222'),
            align: 'end',
            sortable: false,
            value: 'delete'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>