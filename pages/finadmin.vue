<template>
  <div class="container">
    <v-order-book/>
    <v-ticker style="margin: 10px 0;"/>
    
    <!-- <v-fin-chart/> -->

    <v-fin-deals style="margin: 10px 0 0;"/>
  </div>
</template>

<script>
  import ChartVue from '../components/Finadmin/Chart/Chart.vue';
  import DealsVue from '../components/Finadmin/Deals.vue';
  import OrderBookVue from '../components/Finadmin/OrderBook/OrderBook.vue';
  import TickerVue from '../components/Finadmin/Ticker/Ticker.vue';


  export default {
    auth: false,
    
    components: {
      "v-order-book": OrderBookVue,
      "v-ticker": TickerVue,
      "v-fin-chart": ChartVue,
      "v-fin-deals": DealsVue
    },

    }
</script>

<style lang="scss">
  .container{
    max-width: 1640px;
    width: 100%;
    margin: 0 auto;
  }
  .hello {
    color: red;
  }
</style>