<template>
  <component 
    :is="renderSubComponent" 
    v-bind:currentComponent="currentComponent"
  ></component>
</template>

<script>
import LimitVue from './SubSections/Limit.vue';
import MarketVue from './SubSections/Market.vue';
import StopLimitVue from './SubSections/StopLimit.vue';

export default {
  name: 'v-component-buy',
  props: {
    currentComponent: {
      type: String,
      required: true
    },
    currentSubComponent: {
      type: String,
      required: true
    }
  },
  components: {
    'v-component-limit': LimitVue,
    'v-component-market': MarketVue,
    'v-component-stoplimit': StopLimitVue,
  },
  computed: {
    renderSubComponent() {
      return 'v-component-' + this.currentSubComponent.toLowerCase();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>