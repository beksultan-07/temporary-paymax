<template>
  <div class="v-shift-item" :style="`height:${this.height}px`">
    <div class="v-shift-content">
      <slot name="default"></slot>
    </div>
    <div :class="('v-shift-bar ') + (this.assigning ? 'sell' : 'buy')" :style="`width:${this.width}%`" />
  </div>
</template>

<script>
  export default {
    name: "v-component-shift-item",
    data() {
      return {
        style: ''
      }
    },
    props: {
      height: {
        type: Number,
        default: 30
      },
      width: {
        type: Number,
        default: 0
      },
      assigning: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>

  .v-shift-item {
    width: 100%;
    display: flex;
    align-items: center;

    .v-shift-content {
      z-index: 4;
      margin: 0 15px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 14px;
    }

    .v-shift-bar {
      position: absolute;
      height: 100%;
      display: list-item;
      list-style: inside;
      color: transparent;
    }
  }

  .theme--light .v-shift-item > .v-shift-bar.sell {
    background-color: #fff3f4;
  }

  .theme--dark .v-shift-item > .v-shift-bar.sell {
    background-color: #382626;
  }

  .theme--light .v-shift-item > .v-shift-bar.buy {
    background-color: #d9fbef;
  }

  .theme--dark .v-shift-item > .v-shift-bar.buy {
    background-color: #192e2c;
  }

</style>
