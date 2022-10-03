<template>
  <div class="container">
    <div class="finadmin-trade">
      <v-order-book :orderBookData='orderBookData'/>
  
      <div class="right-side-blocks">
        <v-ticker/>
        
        <v-fin-chart class="indets"/>
      </div>

      <div class="right-side-blocks">
        <v-buy-sell/>
    
        <v-fin-deals :orderBookData="orderBookData" class="indets"/>
      </div>
    </div> 

    <v-trade-table class="indets"/>
  </div>
</template>

<script>
  import BuySellVue from '../components/Finadmin/BuySellBlock/BuySell.vue';
  import ChartVue from '../components/Finadmin/Chart/Chart.vue';
  import DealsVue from '../components/Finadmin/Deals.vue';
  import MarginRatioVue from '../components/Finadmin/MarginRatio.vue';
  import OrderBookVue from '../components/Finadmin/OrderBook/OrderBook.vue';
  import TickerVue from '../components/Finadmin/Ticker/Ticker.vue';
  import TradeTableVue from '../components/Finadmin/TradeTable/TradeTable.vue';


  export default {
    auth: false,
    
    components: {
        "v-order-book": OrderBookVue,
        "v-ticker": TickerVue,
        "v-fin-chart": ChartVue,
        "v-fin-deals": DealsVue,
        "v-margin-ratio": MarginRatioVue,
        'v-buy-sell': BuySellVue,
        'v-trade-table': TradeTableVue
    },

    data() {
      return {
        orderBookData: [
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: false, price: 0.9160, amount: 6.510, total: 2771.6053},
          {isred: true, price: 0.9160, amount: 6.510, total: 2771.6053},
        ]
      }
    },

    }
</script>

<style lang="scss">
  .container{
    max-width: 1640px;
    width: 100%;
    margin: 0 auto;
  }
  .finadmin-trade{
    display: grid;
    grid-template-columns: 25% 50% 25%;
    gap: 20px;
  }

  .right-side-blocks{
    display: flex;
    flex-direction: column;
  }
  .indets{
    margin: 20px 0 0;
  }
</style>