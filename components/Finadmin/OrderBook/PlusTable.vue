<template>
  <v-side-block>
    <v-contract-price 
      :value="1264.40"
      :isRed="false"
      :markPrice="0.90"
      class="header-indets"
    />

    <ul class="table">
      <v-side-block-item 
        v-for="i in 13" 
        :key="Date.now() + i"
        :isRed="false" 
        :price="0.9160"
        :amount="6.510"
        :total="2771.6053"
      />
    </ul>


  </v-side-block>
</template>

<script>
  import SideBlockVue from '../SideBlock.vue';
  import ContractPriceVue from './ContractPrice.vue';
  import SideBlockItemVue from '../SideBlockItem.vue';

  export default {
    name: 'v-plus-table',

    components: {
      "v-side-block": SideBlockVue,
      "v-contract-price": ContractPriceVue,
      "v-side-block-item": SideBlockItemVue
    }
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    
    &-indets{
      margin: 0 0 0 auto;
    }
  }
  .table{
    list-style: none;
  }
</style>