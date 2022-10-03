<template>
  <div class="hello">
    <v-side-block>
      <v-component-buysell/>
    </v-side-block>
  </div>
</template>

<script>
import SideBlockVue from '../components/Finadmin/SideBlock.vue';
import BuySellVue from '../components/Finadmin/BuySellBlock/BuySell.vue';

export default {
  auth: false, // временнный флажок
  components: {
    'v-side-block': SideBlockVue,
    'v-component-buysell': BuySellVue 
  }
}
</script>

<style lang="scss" scoped>

</style>