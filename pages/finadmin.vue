<template>
  <div class="hello">
    hello project
    <v-side-block>
      sad
    </v-side-block>
  </div>
</template>

<script>
    import SideBlockVue from '../components/Finadmin/SideBlock.vue';

    export default {
      components: {
        'v-side-block': SideBlockVue
      }    
    }
</script>

<style lang="scss" scoped>
  .hello {
    color: red;
  }
</style>