<template>
  <div class="trade-table">
    <div class="trade-table__header">
      <ul class="trade-table__sections">
        <li 
          class="trade-table__section"
          v-for="section in sections[currentDropdownSection]"
          :key="section.value"
          :class="{
            '_is-active': currentTableComponent === section.value
          }"
          @click="setCurrentableComponent(section.value)"
        >
          {{section.text}}
        </li>
      </ul>
      <v-table-dropdown @setCurrentSection="setCurrentSection"/>
    </div>
    <div class="trade-table__body">
      <component :is="returnCurrentTableComponent"></component>
    </div>
  </div>
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
    sections: {
      commerce: [
        { text: 'Позиции', value: 'position'},
        { text: 'Открытые ордера', value: 'openorder'},
        { text: 'История ордеров', value: 'ordershistory'},
        { text: 'История сделок', value: 'dealshistory'},
        { text: 'История транзакций', value: 'transactionshistory'},
        { text: 'Активы', value: 'assets'},
      ],
      depository: [
        { text: 'Депонирование ЦБ', value: 'depositingSecurties'},
        { text: 'Депонирование ДС', value: 'depositingFinances'},
        { text: 'Списание ЦБ', value: 'decommissioningSecurties' },
        { text: 'Списание ДС', value: 'decommissioningFinances' },
      ]
    },
  }),
  methods: {
    // Выбор раздела в dropdown 
    setCurrentSection(currentDropdownSection) {
      this.currentDropdownSection = currentDropdownSection;
    },
    // Выбор таблицы исходя из текущего выбранного раздела
    setCurrentableComponent(tableComponent) {
      this.currentTableComponent = tableComponent;
    }
  },
  created() {
    // Дефолтная первая таблица
    this.currentTableComponent = this.sections.commerce[0].value
  },
  watch: {
    currentDropdownSection() {
      switch(this.currentDropdownSection) {
        case 'depository': {
          this.currentTableComponent = this.sections.depository[0].value;
          break;
        }
        case 'commerce': {
          this.currentTableComponent = this.sections.commerce[0].value;
          break;
        }
      }
    }
  },
  computed: {
    // Рендер таблиц исходя из выбранного раздела
    returnCurrentTableComponent() {
      return 'v-component-' + this.currentTableComponent.toLowerCase();
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