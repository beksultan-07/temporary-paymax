<template>
  <div class="overflow-x-hidden overflow-y-hidden" :style="'height:' + height + 'px;'">
      <slot name="default"></slot>
  </div>
</template>

<script>
  export default {
    name: "v-component-fullscreen",
    data() {
      return {
        height: 0,
      }
    },
    props: {
      size: {
        type: Number,
        default: 80
      }
    },
    mounted() {
      this.resize();
      window.addEventListener("resize", this.resize);
    },
    methods: {
      resize() {
        this.height = window.innerHeight - this.size;
        this.$emit('v-height', this.height);
      }
    },
    destroyed() {
      window.removeEventListener("resize", this.resize);
    }
  }
</script>

<style lang="scss" scoped>

</style>
