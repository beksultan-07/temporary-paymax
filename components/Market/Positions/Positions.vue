<template>
  <div class="positions__container">
    <div class="positions_wrap">
      <div class="positions__top">
        <h3 class="positions__title">Not Open Positions</h3>
        <div class="positions__right">
          <positions-select
              :placeholder="'Group by counterparty'"
              :options="options"
              :selected="selected"
              @onSelect="onSelect"
          />
          <div class="positions__total">Total Equaity <span class="blue-line">—</span></div>
        </div>
      </div>
      <div class="positions__data-text">No data</div>
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
.positions_wrap{
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px 10px;
  min-height: 600px;
  position: relative;
}
.blue-line{
  color: #496AFF;
}
.positions{
  &__container {
    max-width: 1360px;
    padding: 0 20px;
    margin: 0 auto;
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
    min-width: 120px;
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
    width: 450px;
    @media (max-width: 700px) {
      width: 400px;
    }
    @media (max-width: 465px) {
      flex-direction: column;
      gap: 30px;
      width: 260px;
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