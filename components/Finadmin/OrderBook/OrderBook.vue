<template>
    <div>
      <template v-if="view === 'blocks'">
        <v-minus-table
          @selectTick="selectTick" 
          @changeView="changeView"
          :tick="tick"
          :ticks="ticks"
        />
        <v-plus-table/>
      </template>

      <v-big-table
        v-else-if="view === 'minus'" 
        @selectTick="selectTick"
        @changeView="changeView"
        :isRed="true"
        :tick="tick"
        :ticks="ticks"
      />
      <v-big-table
        v-else-if="view === 'plus'" 
        @selectTick="selectTick"
        @changeView="changeView"
        :isRed="false"
        :tick="tick"
        :ticks="ticks"
      />
    </div>
</template>

<script>
  import MinusTableVue from './MinusTable.vue'
  import PlusTableVue from './PlusTable.vue'
  import BigTableVue from './BigTable.vue'

  export default {
    name: 'v-order-book',

    components: {
      "v-minus-table": MinusTableVue,
      "v-plus-table": PlusTableVue,
      "v-big-table": BigTableVue
    },

    data() {
      return {
        view: 'blocks',
        tick: 0.1,
        ticks: [0.1, 0.01, 0.001]
      }
    },

    methods: {
      selectTick(t) {
        this.tick = t
      },
      changeView(v){
        console.log(v);
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