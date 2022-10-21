<template>
  <div class="info__wrap">
    <div class="info__item" v-for="(item, index) in items" :key="index">
      <div class="info__text">{{item.name}}</div>
      <div class="info__text">{{item.answer}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {name: 'Display name', answer: 'envoys vision'},
        {name: 'User ID', answer: '578'},
        {name: 'User type', answer: 'Taker'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
  &__wrap{
    margin-bottom: 20px;
  }
  &__text{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
  &__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #EAEAEA;
    margin-bottom: 20px;
  }
}
</style>