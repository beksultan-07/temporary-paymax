<template>
  <div class="positions_wrap">
    <div class="positions__top">
      <h3 class="positions__title">Not Open Positions</h3>
      <button class="positions__button">Total Equaity <span class="blue-line">—</span></button>
    </div>
    <positions-select
        :placeholder="'Group by counterparty'"
        :options="options"
        :selected="selected"
        @onSelect="onSelect"
    />
    <div class="positions__data-text">No data</div>
    <button class="positions__button bottom-btn">
      Not Open Positions
    </button>
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
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  min-height: 600px;
  position: relative;
}
.blue-line{
  color: #496AFF;
}
.positions{
  &__button{
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
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
.bottom-btn{
  position: absolute;
  bottom: 20px;
  left: 10px;
}
</style>