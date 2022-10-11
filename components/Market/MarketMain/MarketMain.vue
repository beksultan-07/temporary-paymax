<template>
<div class="main__container">
  <market-depth/>
  <market-positions/>
  <market-trades/>
</div>
</template>

<script>
import MarketDepth from "@/components/Market/MarketMain/MarketDepth";
import MarketPositions from "@/components/Market/MarketMain/MarketPositions";
import MarketTrades from "@/components/Market/MarketMain/MarketTrades";
export default {
  components: {MarketTrades, MarketPositions, MarketDepth}
}
</script>

<style lang="scss" scoped>
.main__container{
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 1230px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 915px) {
    grid-template-columns: repeat(1, 1fr);
  }

}
</style>