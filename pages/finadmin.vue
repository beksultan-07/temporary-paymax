<template>
  <div class="container">
    <div class="finadmin-trade">
      <v-order-book :orderBookData='orderBookData'/>
  
      <div class="side-blocks">
        <v-ticker/>
        
        <v-fin-chart class="indets-top"/>
      </div>

      <div class="side-blocks">
        <v-buy-sell/>
    
        <v-fin-deals :orderBookData="orderBookData" class="indets-top"/>
      </div>
    </div> 
    <div class="finadmin-table indets-top">
      <v-trade-table/>

      <v-depo-assets :depoAssets="depoAssets"/>
    </div>
  </div>
</template>

<script>
  import BuySellVue from '../components/Finadmin/BuySellBlock/BuySell.vue';
  import ChartVue from '../components/Finadmin/Chart/Chart.vue';
  import DealsVue from '../components/Finadmin/Deals.vue';
import DepoAssetsVue from '../components/Finadmin/DepoAssets.vue';
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
        'v-trade-table': TradeTableVue,
        'v-depo-assets': DepoAssetsVue
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
        ],
        depoAssets: [
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
          {check: 'ОАО "Апар Сервис"', tool: 'KMOT.P', volume: 641},
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

  .finadmin-table{
    display: grid;
    grid-template-columns: 75% 25%;
    gap: 20px;
  }

  .side-blocks{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .indets-top{
    margin: 20px 0 0;
  }
</style>