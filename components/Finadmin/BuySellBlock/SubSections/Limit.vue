<template>
  <div>
    <div class="instrument__block">
      <div class="instrument">Инструмент: <strong class="strong">FPI</strong></div>
      <div class="max">Макс</div>
    </div>
    <div class="price">Цена: <strong class="strong">0 USD</strong></div>

    <div v-if="currentComponent === 'Sell'" class="autoschedules">
      <div class="autoschedule">Авто списание ДС</div>
      <div class="switcher" :class="{
        '_is-active': switcherIsActive
      }" @click="switcherIsActive = !switcherIsActive">
        <div class="switcher__track">
          <div class="switcher__thumb"></div>
        </div>
      </div>
    </div>

    <form class="form">
      <div class="fields">
        <div class="input">
          <v-my-select :options="invoiceSelect.options" @onSelect="invoiceOnSelect"
            :selected="invoiceSelect.selected" placeholder="Счёт" />
        </div>
        <div class="input">
          <v-my-select :options="buyerSelect.options" @onSelect="buyerOnSelect"
            :selected="buyerSelect.selected" :placeholder="currentComponent == 'Sell' ? 'Покупатель' : 'Продавец'" />
        </div>
        <div class="input">
          <div class="input__name">Цена</div>
          <input class="field" placeholder="USD" type="number" name="price" v-model.number="priceValue">
        </div>
        <div class="input">
          <div class="input__name">Количество</div>
          <input class="field" placeholder="USD" type="number" name="quantity" v-model.number="quantityValue">
        </div>
        <div class="input">
          <div class="input__name">Всего</div>
          <input class="field" placeholder="USD" type="number" name="total" v-model.number="totalValue">
        </div>
      </div>
      <div class="input">
        <v-component-range-slider v-model="rangeValue" />
      </div>
    </form>
  </div>
</template>

<script>
import MySelectVue from '../../MySelect/MySelect.vue'
import RangeSliderVue from '../RangeSlider/RangeSlider.vue';

export default {
  name: 'v-component-limit',
  props: {
    currentComponent: {
      type: String,
      required: true
    }
  },
  components: {
    'v-my-select': MySelectVue,
    'v-component-range-slider': RangeSliderVue
  },
  data: () => ({
    switcherIsActive: false,
    invoiceSelect: {
      options: ['item1', 'item2', 'item3', 'item3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
    buyerSelect: {
      options: ['buyer1', 'buyer2', 'buyer3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
    priceValue: null,
    quantityValue: null,
    totalValue: null,
    rangeValue: 0
  }),
  methods: {
    invoiceOnSelect(selectedItem) {
      this.invoiceSelect.selected = selectedItem;
    },
    buyerOnSelect(selectedItem) {
      this.buyerSelect.selected = selectedItem;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../BueSell.scss';
</style>