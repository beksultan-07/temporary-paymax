<template>
  <v-side-block class="indets">
    <div class="header">
      <h3 class="header__title">
        Биржевой стакан
      </h3>
      
      <button class="header__icon">
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="5" height="5" fill="#F4293E"/>
          <rect width="5" height="5" transform="translate(0 6)" fill="#4AD2AA"/>
          <rect width="4" height="3" transform="translate(6)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(6 4)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(6 8)" fill="#9C9C9C"/>
        </svg>
      </button>

      <button class="header__icon">
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="5" height="11" fill="#F4293E"/>
          <rect width="4" height="3" transform="translate(6)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(6 4)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(6 8)" fill="#9C9C9C"/>
        </svg>
      </button>

      <button class="header__icon">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="11" fill="#4AD2AA"/>
          <rect width="4" height="3" transform="translate(7)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(7 4)" fill="#9C9C9C"/>
          <rect width="4" height="3" transform="translate(7 8)" fill="#9C9C9C"/>
        </svg>
      </button>

      <button class="request-btn">
        0.1
        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.99957 4.00009L0.170898 1.17143L1.11423 0.22876L2.99957 2.11476L4.8849 0.22876L5.82823 1.17143L2.99957 4.00009Z" fill="#252525"/>
        </svg>
      </button>
    </div>

    <ul class="table">
      <li class="table-row-header">
        <p class="table-col-name">Цена(USDT)</p>
        <p class="table-col-name">Размер(ETH)</p>
        <p class="table-col-name">Сумма(ETH)</p>
      </li>

      <v-side-block-item 
        :status="false" 
        :price="12"
        :amount="2"
        :total="22"
      />
    </ul>

  </v-side-block>
</template>

<script>
  import SideBlockVue from '../SideBlock.vue';
  import SideBlockItemVue from '../SideBlockItem.vue';

  export default {
    name: 'v-minus-table',

    components: {
      "v-side-block": SideBlockVue,
      "v-side-block-item": SideBlockItemVue
    }
  }
</script>

<style lang="scss" scoped>
  .indets{
    margin: 0 0 20px 0;
  }
  .header{
    display: flex;
    align-items: center;
    &__title{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #252525;
    }
    &__icon{
      width: 10px;
      border: none;
      background: none;
      outline: none;
      margin: 0 0 0 10px;
  
      svg{
        width: 100%;
      }
    }
  }

  .request-btn{
    outline: none;
    background: #000;
    background: #F9F9F9;
    border-radius: 2px;
    padding: 0 8px;
    border: none;
    margin: 0 0 0 auto;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    color: #252525;
    
    display: flex;
    align-items: center;

    svg{
      margin: 0 0 0 5px;
    }
  }

  .table{
    padding: 0;
    list-style: none;
    &-row{
      &-header{
        margin: 10px 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &-col{
      &-name{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: #252525;
      }
    }
  }

</style>