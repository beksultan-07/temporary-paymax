<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'v-side-block',

  }
</script>

<style scoped>
  .wrap{
    /* min-width: 395px;
    width: 100%;
    max-width: 100%; */

    height: 100%;
  
    background: #fff;
    border-radius: 4px;
    
    padding: 10px 20px;

    position: relative;
  }
</style>
