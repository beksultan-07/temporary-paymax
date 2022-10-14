<template>
  <div class="your__wrap">
    <h3 class="your__title">Your Requests</h3>
    <span class="your__data" v-if="requests.length <= 0">No data yet</span>
    <ul v-else>
      <li v-for="(request, index) in requests" :key="index">
        {{index}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    requests: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.your{
  &__wrap{
    grid-column: 2 span;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    min-height: 230px;
    @media (max-width: 900px) {
      grid-column: unset;
    }
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 30px;
  }
  &__data{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>