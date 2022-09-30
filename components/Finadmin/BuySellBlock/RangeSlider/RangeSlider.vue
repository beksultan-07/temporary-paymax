<template>
  <div class="range-slider">
    <label class="label" :style="{left: `${rangeValue}%`, transform: `translateX(-${rangeValue - (rangeValue / 2)}%)`}" >{{rangeValue}}%</label>
    <input 
      type="range" 
      name="range-slider" 
      min="0" max="100" 
      v-model="rangeValue"
      :style="getValuePercent"
      @change="handleRange()"
    >
    <div class="range-balls">
      <div class="range-ball" :style="rangeValue > 0 ? {background: '#F48020'} : {background: `#ddd`}"></div>
      <div class="range-ball" :style="rangeValue > 25 ? {background: '#F48020'} : {background: `#ddd`}"></div>
      <div class="range-ball" :style="rangeValue > 50 ? {background: '#F48020'} : {background: `#ddd`}"></div>
      <div class="range-ball" :style="rangeValue > 75 ? {background: '#F48020'} : {background: `#ddd`}"></div>
      <div class="range-ball" :style="rangeValue === 100 ? {background: '#F48020'} : {background: `#ddd`}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-component-range-slider',
    data: () => ({
      rangeValue: 0
    }),
    methods: {
      handleRange() {
        this.$emit('input', this.rangeValue)
      }
    },
    computed: {
      getValuePercent() {
        return {
          background: `linear-gradient(to right, #F48020 ${this.rangeValue}%, #ddd ${this.rangeValue}%)`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.range-slider {
  position: relative;
  margin: 0px 0px 15px 0px;
}
.label {
  position: absolute;
  top: -25px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18 / 12 * 100%);
}
.range-slider input {
  height: 4px;
  width: 100%;
  -webkit-appearance: none;
  position: relative;
  display: block;
  background-color: #ddd;
  z-index: 2;
  &::-webkit-slider-thumb {
    appearance: none;
    cursor: ew-resize;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #F48020;
  }
}

.range-ball {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 1;
  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    left: 24%;
  }
  &:nth-child(3) {
    left: 48%;
  }
  &:nth-child(4) {
    left: 72%;
  }
  &:nth-child(5) {
    left: calc(100% - 12px);
  }
}
</style>