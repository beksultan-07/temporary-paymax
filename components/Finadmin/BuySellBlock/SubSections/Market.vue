<template>
  <div>
    <div class="price">Дост: <strong class="strong">0 USD</strong></div>
    <form class="form">
      <div class="fields">
        <div class="input">
          <div class="input__name">Цена</div>
          <input class="field" placeholder="USD" type="number" name="price" v-model.number="priceValue">
        </div>
        <div class="input">
          <div class="input__name">Всего</div>
          <input class="field" placeholder="USD" type="number" name="quantity" v-model.number="quantityValue">
        </div>
      </div>
      <div class="input">
        <v-component-range-slider v-model="rangeValue" />
      </div>
    </form>
  </div>
</template>

<script>
import RangeSliderVue from '../RangeSlider/RangeSlider.vue';
export default {
  name: 'v-component-market',
  components: {
    'v-component-range-slider': RangeSliderVue
  },
  data: () => ({
    priceValue: null,
    quantityValue: null,
    rangeValue: 0
  })
}
</script>

<style lang="scss" scoped>
@import '../BueSell.scss';
</style>