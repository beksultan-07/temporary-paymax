<template>
  <div class="container">
    <v-order-book/>
    
  </div>
</template>

<script>
import OrderBookVue from '../components/Finadmin/OrderBook/OrderBook.vue';


  export default {
    auth: false,
    
    components: {
      "v-order-book": OrderBookVue
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