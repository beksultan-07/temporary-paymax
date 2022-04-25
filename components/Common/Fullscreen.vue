<template>
  <div class="overflow-x-hidden overflow-y-hidden" :style="syntax + height + 'px;'">
      <slot name="default"></slot>
  </div>
</template>

<script>
  export default {
    name: "v-component-fullscreen",
    data() {
      return {
        height: 0,
        syntax: 'height:'
      }
    },
    props: {
      size: {
        type: Number,
        default: 80
      }
    },
    watch: {
      $route() {
        this.resize();
        window.addEventListener("resize", this.resize);
      }
    },
    mounted() {
      this.resize();
      window.addEventListener("resize", this.resize);
    },
    methods: {
      resize() {

        if (this.$vuetify.breakpoint.name === 'xs') {
          this.syntax = 'min-height:'
        } else {
          this.syntax = 'height:'
        }

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
