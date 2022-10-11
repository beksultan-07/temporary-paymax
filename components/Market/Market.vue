<template>
  <section class="market__wrap">
    <buy-sell-scroll/>
    <market-main/>
  </section>
</template>

<script>

import BuySellScroll from "@/components/Market/BuySellScroll";
import MarketMain from "@/components/Market/MarketMain/MarketMain";

export default {
  components:{
    MarketMain,
    BuySellScroll
  }
}
</script>

<style lang="scss" scoped>
.market__wrap{
  background: #FBFBFB;
}
</style>