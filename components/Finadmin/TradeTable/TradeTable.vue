<template>
  <v-card class="trade-table">
    <div class="trade-table__header">
      <v-tabs v-model="currentTableComponent" color="#F48020">
        <v-tab
          class="text-caption"
          :ripple="false" 
          v-for="section in sections[currentDropdownSection]" 
          :key="section.value" 
        >
          {{section.text}}
        </v-tab>
      </v-tabs>
      <v-table-dropdown @setCurrentSection="setCurrentSection"/>
    </div>
    <div class="trade-table__body">
      <template v-if="currentTableComponent !== null">
        <component :is="returnCurrentTableComponent"></component>
      </template>
    </div>
  </v-card>
</template>

<script>
import AssetsVue from './Sections/Assets.vue';
import DealsHistoryVue from './Sections/DealsHistory.vue';
import DecommissioningFinancesVue from './Sections/DecommissioningFinances.vue';
import DecommissioningSecurtiesVue from './Sections/DecommissioningSecurties.vue';
import DepositingFinancesVue from './Sections/DepositingFinances.vue';
import DepositingSecurtiesVue from './Sections/DepositingSecurties.vue';
import OpenOrderVue from './Sections/OpenOrder.vue';
import OrdersHistoryVue from './Sections/OrdersHistory.vue';
import PositionVue from './Sections/Position.vue';
import TransactionsHistoryVue from './Sections/TransactionsHistory.vue';
import TableDropdownVue from './TableDropdown.vue';

export default {
  name: 'v-trade-table',
  components: {
    'v-table-dropdown': TableDropdownVue,
    'v-component-position': PositionVue,
    'v-component-openorder': OpenOrderVue,
    'v-component-dealshistory': DealsHistoryVue,
    'v-component-ordershistory': OrdersHistoryVue,
    'v-component-transactionshistory': TransactionsHistoryVue,
    'v-component-assets': AssetsVue,
    'v-component-depositingsecurties': DepositingSecurtiesVue,
    'v-component-depositingfinances': DepositingFinancesVue,
    'v-component-decommissioningsecurties': DecommissioningSecurtiesVue,
    'v-component-decommissioningfinances': DecommissioningFinancesVue,
  },
  data: () => ({
    currentDropdownSection: null,
    currentTableComponent: null,
  }),
  methods: {
    // ?????????? ?????????????? ?? dropdown 
    setCurrentSection(currentDropdownSection) {
      this.currentDropdownSection = currentDropdownSection;
    }
  },
  computed: {
    // ???????????? ???????????? ???????????? ???? ???????????????????? ??????????????
    returnCurrentTableComponent() {
      // ?????????? ?????????? ???????????????? ?????????????????????? (?????? 'v-component-'), ???????????????? ???????????? ?? ????????????????, ?????????? ?????????????? ?????????????? ???????????? ???? ???????????????????? ???????????????? ?? dropdown ("commerce" | "depository")
      // ?????????? ???????????? ???????????????? ???????????????? ???????????????????? (????????????????: position), ???????????????????????? ???????????????????? ??????????????, ?? ???????????????????? ???????????????????????? ??????????  (this.sections['commerce'][0].value == 'position' -> 'v-component-position')
      return 'v-component-' + this.sections?.[this.currentDropdownSection]?.[this.currentTableComponent]?.value.toLowerCase();
    },
    // ???????????? ????????????????
    sections() {
      return {
        commerce: [
          { text: '??????????????', value: 'position' },
          { text: '???????????????? ????????????', value: 'openorder' },
          { text: '?????????????? ??????????????', value: 'ordershistory' },
          { text: '?????????????? ????????????', value: 'dealshistory' },
          { text: '?????????????? ????????????????????', value: 'transactionshistory' },
          { text: '????????????', value: 'assets' },
        ],
        depository: [
          { text: '?????????????????????????? ????', value: 'depositingSecurties' },
          { text: '?????????????????????????? ????', value: 'depositingFinances' },
          { text: '???????????????? ????', value: 'decommissioningSecurties' },
          { text: '???????????????? ????', value: 'decommissioningFinances' },
        ]
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.trade-table {
  max-width: 1231px;
  padding: 20px 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 25px 0px;
  }
  
}

</style>