<template>
  <div class="hello">
    <v-trade-table/>
  </div>
</template>

<script>
import TradeTableVue from '../components/Finadmin/TradeTable/TradeTable.vue';
export default {
  auth: false, // временнный флажок
  components: {
    'v-trade-table': TradeTableVue 
  }
}
</script>

<style lang="scss" scoped>

</style>