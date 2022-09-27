<template>
    <div class="wrap">
        <v-minus-table/>

        <v-plus-table/>
    </div>
</template>

<script>
import MinusTableVue from './MinusTable.vue'
import PlusTableVue from './PlusTable.vue'

  export default {
    name: 'v-order-book',

    components: {
      "v-minus-table": MinusTableVue,
      "v-plus-table": PlusTableVue
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    display: flex;
    flex-direction: column;
  }

</style>