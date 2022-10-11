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
  align-items: center;
  user-select: none;
  &__item {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #9C9C9C;
  }
}

.select {
  background: #FFFFFF;
  border-radius: 2px;
  padding: 10px 17px 10px 10px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  &__menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    background-color: #fff;
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
    font-size: 12px;
    color: #9C9C9C;
    transition: .2s ease-in-out;
    &:hover {
      background-color: #9C9C9C;
      color: #fff;
    }
  }
}

</style>