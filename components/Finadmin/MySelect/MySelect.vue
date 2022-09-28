<template>
  <div class="select field" tabindex="1" @blur="selectMenuIsActive = false">
    <div class="selected" @click="selectMenuIsActive = !selectMenuIsActive">
      <div class="selected__item">{{ selected ? selected : placeholder }}</div>
      <div class="selected__icon"><img src="../../../assets/select=icons/arrow.svg" alt="arrow"></div>
    </div>
    <transition name="fade">
      <ul class="select__menu" v-if="selectMenuIsActive">
        <li 
        v-for="(option, index) in options" 
        :key="index"
        class="select__item"
        @click="chooseAndClose(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'v-my-select',
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data: () => ({
    selectMenuIsActive: false,
  }),
  methods: {
    chooseAndClose(selectedItem) {
      this.$emit('invoiceOnSelect', selectedItem)
      this.selectMenuIsActive = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.selected {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.5px 0px 0px 0px;
  user-select: none;
  &__item {
    font-weight: 400;
    font-size: 12px;
    color: #9C9C9C;
  }
  &__icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.select {
  position: relative;
  &__menu {
    position: absolute;  
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    background-color: #F9F9F9;
    border-radius: 2px;
    z-index: 2;
    max-height: 150px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #9C9C9C;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: #F2F2F2;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #9C9C9C;
      border-radius: 10px;
    }
  }
  &__item {
    cursor: pointer;
    padding: 5px 10px;
    list-style: none;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18 / 12 * 100%);
    color: #9C9C9C;
    transition: background-color 150ms ease;
    &:hover {
      background-color: #F0F1FF;
    }
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
</style>