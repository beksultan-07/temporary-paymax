<template>
    <div>
      <v-double-table
        v-if="view === 'blocks'"
        @selectTick="selectTick" 
        @changeView="changeView"
        :options="orderBookData"
        :tick="tick"
        :ticks="ticks"
      />

      <v-big-table
        v-else-if="view === 'minus'" 
        @selectTick="selectTick"
        @changeView="changeView"
        :options="orderBookData"
        :isred="true"
        :tick="tick"
        :ticks="ticks"
      />
      <v-big-table
        v-else-if="view === 'plus'" 
        @selectTick="selectTick"
        @changeView="changeView"
        :options="orderBookData"
        :isred="false"
        :tick="tick"
        :ticks="ticks"
      />
    </div>
</template>

<script>
  import BigTableVue from './BigTable.vue'
  import DoubleTableVue from './DoubleTable.vue'

  export default {
    name: 'v-order-book',

    components: {
      "v-big-table": BigTableVue,
      "v-double-table": DoubleTableVue
    },

    data() {
      return {
        view: 'blocks',
        tick: 0.1,
        ticks: [0.1, 0.01, 0.001],
      }
    },

    props: {
      orderBookData: Array
    },  

    methods: {
      selectTick(t) {
        this.tick = t
      },
      changeView(v){
        this.view = v
      }
    },

  }
</script>

<style lang="scss" scoped>
  .wrap{
    display: flex;
    flex-direction: column;
  }

</style>