<template>
  <div class="to-you__wrap">
    <h3 class="to-you__title">Transactions to You</h3>
    <span class="to-you__data">No data yet</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.to-you{
  &__wrap{
    grid-column: 2 span;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    min-height: 230px;
    @media (max-width: 900px) {
      grid-column: unset;
    }
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 30px;
  }
  &__data{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>