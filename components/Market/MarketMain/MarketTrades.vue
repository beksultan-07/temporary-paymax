<template>
  <div class="trades_wrap">
      <h3 class="trades__title">Last Trades</h3>
    <div class="trades__data-text">No data</div>
    <button class="trades__button bottom-btn">
      See History
    </button>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.trades_wrap {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  min-height: 600px;
  position: relative;
}
.trades {
  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
  }
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
  &__data-text {
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
.bottom-btn {
  position: absolute;
  bottom: 20px;
  left: 10px;
}
</style>