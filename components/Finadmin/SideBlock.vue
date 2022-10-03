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
    width: 395px;
  
    background: #fff;
    border-radius: 4px;
    
    padding: 10px 20px;
  }
</style>
