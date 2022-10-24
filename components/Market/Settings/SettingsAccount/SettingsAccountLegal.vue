<template>
  <div class="legal__wrap">
    <h2 class="legal__title">Legal</h2>
    <div class="legal__links">
      <a class="legal__link" :href="item.href" v-for="(item, index) in items" :key="index">
        {{item.name}}
        <img src="asset/market/settings/arrow.svg" alt="arrow" class="arrow">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {name: 'Terms & Conditions', href: '#'},
        {name: 'Operating rules', href: '#'},
        {name: 'Privacy Policy', href: '#'},
        {name: 'Risk Disclosure', href: '#'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.legal{
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 20px;
  }
  &__link{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom: 1px solid #EAEAEA;
    text-decoration: none;
    transition: .3s ease-in-out;
    &:hover{
      background: #EAEAEA;
    }
  }
}
</style>