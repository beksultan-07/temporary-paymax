<template>
  <div>
    <div class="instrument__block">
      <div class="instrument">Инструмент: <strong class="strong">FPI</strong></div>
      <div class="max">Макс</div>
    </div>
    <div class="price">Цена: <strong class="strong">0 USD</strong></div>

    <form class="form">
      <div class="fields">
        <div class="input">
          <v-my-select :options="invoiceSelect.options" @invoiceOnSelect="invoiceOnSelect" :selected="invoiceSelect.selected"
            placeholder="Счёт" />
        </div>
        <div class="input">
          <div class="input__name">Цена</div>
          <input class="field" placeholder="USD" type="number" name="price">
        </div>
        <div class="input">
          <div class="input__name">Количество</div>
          <input class="field" placeholder="USD" type="number" name="quantity">
        </div>
        <div class="input">
          <div class="input__name">Всего</div>
          <input class="field" placeholder="USD" type="number" name="total">
        </div>
      </div>
      <div class="input">
        <v-component-range-slider v-model="rangeValue"/>
      </div>
    </form>
  </div>
</template>

<script>
import MySelectVue from '../MySelect/MySelect.vue'
import RangeSliderVue from './RangeSlider/RangeSlider.vue';

export default {
  name: 'v-component-buy',
  components: {
    'v-my-select': MySelectVue,
    'v-component-range-slider': RangeSliderVue
  },
  data: () => ({
    invoiceSelect: {
      options: ['item1', 'item2', 'item3', 'item3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
    buyerSelect: {
      options: ['buyer1', 'buyer2', 'buyer3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
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
.instrument__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9C9C9C;
  font-weight: 400;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
  margin: 0px 0px 15px 0px;
}

.price {
  color: #9C9C9C;
  font-weight: 400;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
  margin: 0px 0px 15px 0px;
}

.strong {
  color: #4478BB;
  font-weight: 700;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
}

.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 0px 0px 35px 0px;
}

.input {
  &__name {
    font-weight: 400;
    font-size: 10px;
    line-height: calc(18 / 10 * 100%);
    color: #9C9C9C;
    margin: 0px 0px 2px 0px;
  }

  &:last-child {
    grid-column: 1 / 3;
  }

  &:nth-child(1) {
    grid-column: 1 / 3;
  }
}

.range-slider {
  position: relative;
}

.field {
  width: 100%;
  min-height: 35px;
  background: #F9F9F9;
  border-radius: 2px;
  padding: 0px 0px 0px 10px;
  font-weight: 400;
  font-size: 12px;
  color: #252525;

  &::placeholder {
    color: #9C9C9C;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
}
</style>