<template>
    <v-side-block class="big-block">
      <v-settings-header 
        @selectTick="selectTick" 
        @changeView="changeView"
        :tick="tick"
        :ticks="ticks"
      />
  
      <ul class="table">
        <v-side-block-item 
          v-for="(el, idx) in options" 
          v-if="el.isred === isred"
          :key="Date.now() + idx"
          :isred="el.isred" 
          :price="el.price"
          :amount="el.amount"
          :total="el.total"
          />
      </ul>
  
    </v-side-block>
  </template>
  
  <script>
    import SideBlockVue from '../SideBlock.vue';
    import SideBlockItemVue from '../SideBlockItem.vue';
    import SettingsHeader from './SettingsHeader.vue';
  
    export default {
      name: 'v-big-table',
      
      components: {
        "v-side-block": SideBlockVue,
        "v-side-block-item": SideBlockItemVue,
        "v-settings-header": SettingsHeader
      },
      
      props: {
        isred: {
            type: Boolean,
            required: true
        },
        tick: Number,
        ticks: Array,
        options: Array
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
    .big-block{
      height: 750px;
    }
  
    .table{
      overflow-y: scroll;
      padding: 0;
      list-style: none;

    }
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #F2F2F2;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #9C9C9C;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  
  </style>