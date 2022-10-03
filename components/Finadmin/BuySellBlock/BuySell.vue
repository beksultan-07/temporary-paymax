<template>
  <v-side-block>
    <div class="orderform">
      <div class="buysell__items">
        <div 
          v-for="t in buySellTabs" 
          :key="t.component" 
          class="buysell__item"
          @click="currentCumponent = t.component"
          :class="{
            '_is-active': currentCumponent === t.component
          }"
        >
          {{t.name}}
        </div>
      </div>
      <div class="subparts">
        <div 
          v-for="subTab in buySellSubTabs" 
          :key="subTab.component" 
          class="subpart"
          :class="{
            '_is-active': currentSubComponent === subTab.component
          }"
          @click="currentSubComponent = subTab.component"
        >
          {{subTab.name}}
        </div>
      </div>
      
      <component 
        :is="renderComponent" 
        v-bind:currentSubComponent="currentSubComponent"
        v-bind:currentComponent="currentCumponent"
      ></component>
    </div>
  </v-side-block>
</template>

<script>
import MySelectVue from '../MySelect/MySelect.vue';
import BuyVue from '../BuySellBlock/Buy.vue';
import SellVue from '../BuySellBlock/Sell.vue';
import SideBlockVue from '../SideBlock.vue';

export default {
  name: 'v-component-buysell',
  components: {
    'v-my-select': MySelectVue,
    'v-component-buy': BuyVue,
    'v-component-sell': SellVue,
    'v-side-block': SideBlockVue
  },
  data: () => ({
    currentCumponent: 'Buy',
    currentSubComponent: 'Limit',
    buySellTabs: [
      {name: 'Купить', component: 'Buy'},
      {name: 'Продать', component: 'Sell'},
    ],
    buySellSubTabs: [
      {name: 'Лимит', component: 'Limit'},
      {name: 'Маркет', component: 'Market'},
      {name: 'Стоп-Лимит', component: 'StopLimit'},
    ]
  }),
  computed: {
    renderComponent() {
      return 'v-component-' + this.currentCumponent.toLowerCase();
    }
  }
}
</script>

<style lang="scss" scoped>
.orderform {
  padding: 0 11px;
  & > *:last-child {
    margin-bottom: 0;
  }
}

.buysell {
  &__items {
    min-height: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  &__item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    transition: color 150ms ease;
    color: #9C9C9C;
    &._is-active {
      color: #F48020;
    }
    &:hover {
      color: #F48020;
    }
  }
}

.subparts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px 0px 15px 0px;
  .subpart {
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18 / 12 * 100%);
    color: #9C9C9C; 
    transition: color 200ms ease;
    justify-self: center;
    &._is-active {
      font-weight: 700;
      color: #4478BB;
    }
    &:hover {
      font-weight: 700;
      color: #4478BB;
    }
  }
}

</style>