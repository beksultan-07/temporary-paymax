<template>
  <div>
    <div class="price">Дост: <strong class="strong">0 USD</strong></div>
    <form class="form">
      <div class="fields">
        <div class="input">
          <div class="input__name">Стоп</div>
          <input class="field" placeholder="USD" type="number" name="price" v-model.number="stopValue">
        </div>
        <div class="input">
          <div class="input__name">Лимит</div>
          <input class="field" placeholder="USD" type="number" name="quantity" v-model.number="limitValue">
        </div>
        <div class="input">
          <div class="input__name">Количество</div>
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
  name: 'v-component-stoplimit',
  components: {
    'v-component-range-slider': RangeSliderVue
  },
  data: () => ({
    stopValue: null,
    limitValue: null,
    quantityValue: null,
    rangeValue: 0,
  })
}
</script>

<style lang="scss" scoped>
@import '../BueSell.scss';
</style>