<template>
  <li class="table-row">
    <p 
      class="table-col" 
      :class="minus?'red':'green'"
    >
      {{price}}
    </p>
    <p class="table-col">
      {{amount}}
    </p>
    <p class="table-col">
      {{total}}
    </p>
  </li>
</template>

<script>
  export default {
    name: 'v-side-block-item',
    
    props: {
      status: {
        type: Boolean,
        required: true
      },
      price: Number,
      amount: Number,
      total: Number
  },
  }
</script>

<style lang="scss" scoped>
  .table-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .table-col{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #252525;
    margin: 1.5px 0;
    &.green{
        color: #4AD2AA !important;
        background: none !important;
      }
    &.red{
      color: #F4293E !important; 
      background: none !important;

    }
  }
  
</style>