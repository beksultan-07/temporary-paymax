<template>
  <div class="trade-table">
    <div class="trade-table__header">
      <ul class="trade-table__sections">
        <li 
          class="trade-table__section"
          v-for="section in $options.sections[currentDropdownSection]"
          :key="section"
        >
          {{section}}
        </li>
      </ul>
      <v-table-dropdown @setCurrentSection="setCurrentSection"/>
    </div>
    <div class="trade-table__body">
      
    </div>
  </div>
</template>

<script>
import AssetsVue from './Sections/Assets.vue';
import DealsHistoryVue from './Sections/DealsHistory.vue';
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
    'v-component-assets': AssetsVue
  },
  sections: {
    commerce: ['Позиции', 'Открытые ордера', 'История ордеров', 'История сделок', 'История транзакций', 'Активы'], 
    depository: ['Депонирование ЦБ', 'Депонирование ДС', 'Списание ЦБ', 'Списание ДС']
  },
  data: () => ({
    currentDropdownSection: null
  }),
  methods: {
    setCurrentSection(currentDropdownSection) {
      this.currentDropdownSection = currentDropdownSection;
    }
  }
}
</script>

<style lang="scss" scoped>
.trade-table {
  max-width: 1231px;
  background: #ffffff;
  border-radius: 4px;
  padding: 20px 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 25px 0px;
  }

  &__sections {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    &>*:not(:last-child) {
      margin: 0px 20px 0px 0px;
    }
  }
  &__section {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #9C9C9C;
    padding: 0px 10px 2px 10px;
    &:hover {
      color: #F48020;
    }
    &._is-active {
      color: #F48020;
      border-bottom: 1px solid #F48020;
    }
  }
}

</style>