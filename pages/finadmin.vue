<template>
  <div class="container">
    <v-order-book/>
    <v-ticker style="margin: 10px 0 0;"/>
  </div>
</template>

<script>
  import OrderBookVue from '../components/Finadmin/OrderBook/OrderBook.vue';
  import TickerVue from '../components/Finadmin/Ticker/Ticker.vue';


  export default {
    auth: false,
    
    components: {
      "v-order-book": OrderBookVue,
      "v-ticker": TickerVue
    }    

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