<template>
  <v-side-block class="indets">
    <v-settings-header 
      @selectTick="selectTick" 
      @changeView="changeView"
      :tick="tick"
      :ticks="ticks"
    />

    <ul class="table">
      <v-side-block-item 
        v-for="i in 13" 
        :key="Date.now() + i"
        :isRed="true" 
        :price="0.9160"
        :amount="6.510"
        :total="2771.6053"
      />
    </ul>

  </v-side-block>
</template>

<script>
  import SideBlockVue from '../SideBlock.vue';
  import SideBlockItemVue from '../SideBlockItem.vue';
  import SettingsHeader from './SettingsHeader.vue';

  export default {
    name: 'v-minus-table',
    
    components: {
      "v-side-block": SideBlockVue,
      "v-side-block-item": SideBlockItemVue,
      "v-settings-header": SettingsHeader
    },
    
    props: {
      tick: Number,
      ticks: Array
    },  
    
    methods: {
      selectTick(t) {
        this.$emit('selectTick', t)
      },
      changeView(v){
        this.$emit('changeView', v)
      }
    },

  }
</script>

<style lang="scss" scoped>
  .indets{
    margin: 0 0 20px 0;
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
        margin: 0;
      }
    }
  }

</style>