<template>
  <li class="table-row">
    <p 
      class="table-col" 
      :class=" isRed ? 'red' : 'green' "
    >
      {{price}}
    </p>
    <p class="table-col">
      {{amount}}
    </p>
    <p class="table-col indents">
      {{total}}
    </p>
  </li>
</template>

<script>
  export default {
    name: 'v-side-block-item',
    
    props: {
      isRed: {
        type: Boolean,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
  },
}
</script>

<style lang="scss" scoped>
  .table-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5px 0;
  }
  .table-col{
    margin: 0;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #252525;
    &.green{
        color: #4AD2AA !important;
        background: none !important;
      }
    &.red{
      color: #F4293E !important; 
      background: none !important;

    }

    &.indents{
      padding: 0 5px 0 0;
    }
  }
  
</style>