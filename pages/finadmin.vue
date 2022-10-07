<template>
  <div class="container">
    <div class="finadmin-trade">
      <v-order-book :orderBookData='orderBookData' class="mini-block"/>
  
      <div class="side-blocks blocks-between big-block">
        <v-ticker 
          :dialogData='dialogData'
          :dialogDataStocks="dialogDataStocks"
          :dialogDataBonds="dialogDataBonds"
          :dialogDataFutures="dialogDataFutures"
          :dialogDataIndices="dialogDataIndices"
          :countries="countries"
        />
        <v-fin-chart class="indets-top"/>
      </div>

      <div class="side-blocks mini-block">
        <v-buy-sell/>
        <v-fin-deals :orderBookData="orderBookData" class="indets-top"/>
      </div>
    </div> 
    <div class="finadmin-table indets-top">
      <v-trade-table class="huge-block indets-right"/>

      <v-depo-assets class="mini-block" :depoAssetsData="depoAssetsData"/>
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
        depoAssetsData: [
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          {check: 'ОАО "Апар Сервис" цб', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ЦБ'},
          {check: 'ОАО "Апар Сервис" дс', tool: 'KMOT.P', volume: 641, depo: 'Депозитарий ДС'},
          
        ],

        countries: [
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
                    {name: 'usa', image: '/asset/usa.png'},
        ],
        dialogData: [
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
        ],
        dialogDataStocks: [
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Stock', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
        ],
        dialogDataBonds: [
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Bonds', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
        ],
        dialogDataFutures: [
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Futures', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
        ],
        dialogDataIndices: [
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
            {tool: 'AAPL Indices', icon: '/asset/tool.png', desc: 'APPLE INC', country: {name: 'USA', image: '/asset/usa.png'}, crypto: 'NASDAQ'},
        ],
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
    display: flex;
    justify-content: space-between;
  }

  .finadmin-table{
    display: flex;
    justify-content: space-between;
  }

  .side-blocks{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .blocks-between{
    margin: 0 20px;
  }
  .indets-top{margin: 20px 0 0;}
  .indets-right{margin: 0 20px 0 0;}

  .mini-block{flex: 1;}
  .big-block{flex: 2;}
  .huge-block{flex: 3.33;}
</style>