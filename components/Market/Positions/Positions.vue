<template>
  <div class="positions__wrap">
    <div class="positions__container">
      <div class="positions__content">
        <div class="positions__top">
          <h3 class="positions__title">Not Open Positions</h3>
          <div class="positions__right">
            <positions-select
                :placeholder="'Group by counterparty'"
                :options="options"
                :selected="selected"
                @onSelect="onSelect"
            />
            <button class="positions__total">Total planned Equity <span class="positions__total--blue">$1080.57</span></button>
            <button class="positions__total">Total Equity <span class="positions__total--blue">$1080.57</span></button>
          </div>
        </div>
        <div class="positions__data-text">No data</div>
      </div>
    </div>
  </div>
</template>

<script>
import PositionsSelect from "@/components/Market/MarketSelects/PositionsSelect";
export default {
  components: {PositionsSelect},
  data() {
    return {
      options: [ 'Group by counterparty', 'counterparty 2', 'counterparty 3',],
      selected: null,
    }
  },
  methods: {
    onSelect(selectedItem) {
      this.selected = selectedItem;
    },
  },
}
</script>

<style lang="scss" scoped>
.positions{
  &__wrap{
    padding-top: 30px;
    background: #FBFBFB;
  }
  &__container {
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
  }
  &__content{
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 10px;
    min-height: 600px;
    position: relative;
  }
  &__total{
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    white-space: nowrap;
    &--blue{
      color: #496AFF;
    }
  }
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    @media (max-width: 615px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  &__right{
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 465px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
  }
  &__data-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
}
</style>