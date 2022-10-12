<template>
  <div class="select field" tabindex="1" @blur="selectMenuIsActive = false">
    <div class="selected" @click="selectMenuIsActive = !selectMenuIsActive">
      <div class="selected__item">{{ selected ? selected : placeholder }}</div>
      <img src="asset/market/arrows/arrow.svg" alt="arrow">
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
      this.$emit('onSelect', selectedItem)
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
  gap: 20px;
  align-items: center;
  user-select: none;
  &__item {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #868686;
  }
}

.select {
  background: #F7F7F7;
  border-radius: 4px;
  padding: 12px 10px;
  width: 100%;
  position: relative;
  &__menu {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f7f7f7;
    border-radius: 2px;
    z-index: 2;
    overflow: hidden;
  }
  &__item {
    cursor: pointer;
    padding: 10px;
    list-style: none;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    transition: .2s ease-in-out;
    &:hover {
      background-color: #9C9C9C;
      color: #fff;
    }
  }
}

</style>