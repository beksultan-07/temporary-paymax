<template>
  <div class="limits__wrap">
    <div class="limits__container">
      <div class="limits__content">
        <div class="limits__form">
          <limits-form/>
        </div>
        <div class="scroll">
          <limits-global/>
        </div>
        <div class="scroll">
          <limits-limit/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LimitsGlobal from "@/components/Market/Limits/LimitsGlobal";
import LimitsLimit from "@/components/Market/Limits/LimitsLimit";
import LimitsForm from "@/components/Market/Limits/LimitsForm";
export default {
  name: "Limits",
  components: {LimitsForm, LimitsLimit, LimitsGlobal},
}
</script>

<style lang="scss" scoped>
.limits{
  &__wrap{
    min-height: 100vh;
    padding-top: 30px;
    background: #FBFBFB;
    overflow-x: hidden;
  }
  &__container{
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1400px;
  }
  &__content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 900px) {
      gap: 0;
      row-gap: 20px;
      grid-template-columns: repeat(1,1fr);
    }
  }
  &__form{
    grid-row: 2 span;
  }
}
.scroll{
  grid-column: 2 span;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: #9C9C9C;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
  }
  &::-webkit-scrollbar-track{
    background: #F2F2F2;
    border-radius: 10px;
  }
}
</style>