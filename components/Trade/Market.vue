<template>
  <v-card class="ma-1" height="500" elevation="0">

    <!-- Start: marker market tab element -->
    <template v-if="markers.length">
      <v-app-bar color="transparent" height="50" flat>
        <v-tabs color="primary" v-model="eyelet" show-arrows>
          <v-tab @click="getPairs(item)" v-for="item in markers" :key="item">{{ item }}</v-tab>
        </v-tabs>
      </v-app-bar>
    </template>
    <template v-else>
      <v-layout style="height: 50px" wrap>
        <v-flex/>
        <v-flex class="text-center" align-self-center>
          {{ $vuetify.lang.t('$vuetify.lang_60') }}
        </v-flex>
        <v-flex/>
      </v-layout>
    </template>
    <!-- End: marker market tab element -->

    <v-divider />

    <!-- Start: pairs list element -->
    <template v-if="pairs.length">
      <template v-if="items.length">
        <v-virtual-scroll @mouseover="hover = true" @mouseleave="hover = false" :class="hover ? '' : 'overflow-y-hidden'" bench="0" :items="items" height="393" item-height="49">
          <template v-slot:default="{ item }">
            <v-list-item :color="$vuetify.theme.dark ? 'grey darken-3' : 'deep-purple lighten-5'" :to="'/trade/' + item.base_unit + '-' + item.quote_unit" :key="item.id" dense>
              <v-list-item-avatar class="mr-2" size="30">
                <v-img :src="$storages(['icon'], item.symbol)"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title><span :class="($vuetify.theme.dark ? 'white' : 'black') + '--text'">{{ item.base_unit.toUpperCase() }}/</span><span class="grey--text">{{ item.quote_unit.toUpperCase() }}</span></v-list-item-title>
                <template v-if="item.status">
                  <v-list-item-subtitle>{{ $decimal.format(item.price ? item.price : 0) }} {{ item.quote_unit.toUpperCase() }}</v-list-item-subtitle>
                </template>
                <template v-else>
                  <v-list-item-subtitle class="red--text text-uppercase">{{ $vuetify.lang.t('$vuetify.lang_127') }}</v-list-item-subtitle>
                </template>
              </v-list-item-content>
              <v-list-item-action>
                <template v-if="item.status">
                  <span :class="Math.sign(item.ratio) === -1 ? 'red--text' : 'teal--text'">{{ item.ratio ? (Math.sign(item.ratio) === -1 ? (item.ratio).toFixed(2) : `+${(item.ratio).toFixed(2)}`) : '+0.00' }}%</span>
                </template>
                <template v-else>
                  <v-icon>
                    mdi-power-cycle
                  </v-icon>
                </template>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </template>
      <template v-else>
        <v-layout style="height: 393px" wrap>
          <v-flex/>
          <v-flex class="text-center mx-5" align-self-center>
            <div>
              <v-icon size="50">
                mdi-database-remove-outline
              </v-icon>
            </div>
            <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_49') }}</h4>
          </v-flex>
          <v-flex/>
        </v-layout>
      </template>
    </template>
    <template v-else-if="!overlay">
      <v-layout style="height: 393px" wrap>
        <v-flex/>
        <v-flex class="text-center mx-5" align-self-center>
          <div>
            <v-icon size="50">
              mdi-database-remove-outline
            </v-icon>
          </div>
          <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_48') }}</h4>
        </v-flex>
        <v-flex/>
      </v-layout>
    </template>
    <!-- End: pairs list element -->

    <!-- Start: pair search element -->
    <template v-if="!overlay">
      <v-divider />
      <v-card-actions>
        <v-text-field color="primary" height="40" v-model="search" dense hide-details outlined :label="$vuetify.lang.t('$vuetify.lang_50')" prepend-inner-icon="mdi-layers-search-outline" />
      </v-card-actions>
    </template>
    <!-- End: pair search element -->

    <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
      <v-progress-circular color="yellow darken-3" indeterminate size="50" />
    </v-overlay>

  </v-card>
</template>

<script>

  import Api from "../../libs/api";

  export default {
    name: "v-component-market",
    props: {
      unit: String
    },
    data() {
      return {
        hover: false,
        search: null,
        overlay: true,
        eyelet: 0,
        markers: [],
        pairs: []
      }
    },
    mounted() {

      this.getMarkers(this.unit.split('-')[0]);
      this.getPairs(this.unit.split('-')[0]);

      /**
       * Отслеживаем события бегущей строки, данные об торгах.
       * @object {base_unit: string},
       * @object {close: float},
       * @object {high: float},
       * @object {low: float},
       * @object {open: float},
       * @object {quote_unit: string},
       * @object {time: int}
       */
      this.$publish.bind('trade/graph:0', (data) => {
        if (data.graph && data.graph.length > 1) {
          this.pairs.filter((item) => {
            if (

              // Сверяем принадлежат ли новые события к данному активу,
              // если аргументы совпадают то привязываем полученные данные из события к данному активу.
              item.base_unit === data.graph[0].base_unit &&
              item.quote_unit === data.graph[0].quote_unit

            ) {
              item.ratio = data.graph[0].close - data.graph[1].close;
              item.price = data.graph[0].close;
              return item;
            }

          });

          // Sort pairs by index.
          this.sort();
        }
      });

    },
    methods: {

      /**
       * @param symbol
       */
      getPairs(symbol) {
        this.overlay = true;

        let markers = this.markers.length;
        this.$axios.$post(Api.exchange.getPairs, {symbol: symbol}).then((response) => {

          if (!markers) {
            this.eyelet = this.markers.indexOf(symbol);
          }

          this.pairs = response.pairs ?? [];
          this.overlay = false;

          // Sort pairs by index.
          this.sort();
        });
      },

      /**
       * @param symbol
       */
      getMarkers(symbol) {
        this.$axios.$post(Api.exchange.getMarkers).then((response) => {
          this.markers = response.markers ?? [];

          // Sort by symbol.
          this.markers.map((item, index) => {
            if (item === symbol) {
              this.markers[index] = this.markers[0];
              this.markers[0] = item
            }
          })
        });
      },

      /**
       *
       */
      sort() {
        if (!this.hover) {
          this.pairs.sort((a, b) => {
            if (!a.ratio) {
              a.ratio = 0
            }
            if (!b.ratio) {
              b.ratio = 0
            }
            return b.ratio - a.ratio;
          });
        }
      }
    },
    computed: {

      /**
       * @returns {[]|*[]}
       */
      items() {
        if(this.search) {
          return this.pairs.filter((item) => {
            return item.base_unit.toUpperCase().includes(this.search.toUpperCase()) || item.quote_unit.toUpperCase().includes(this.search.toUpperCase())
          });
        } else {
          return this.pairs;
        }
      }
    }
  }
</script>

<style scoped>

</style>
