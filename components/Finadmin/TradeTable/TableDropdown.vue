<template>
  <div class="trade-table__dropdown dropdown" tabindex="0" @focusout="dropdownMenuIsVisible = false">
    <div class="dropdown__current" @click="dropdownMenuIsVisible = !dropdownMenuIsVisible"
      :style="dropdownMenuIsVisible ? {borderRadius: '4px 4px 0px 0px'} : {borderRadius: '4px'}">
      <div class="current__name">{{currentSection?.name}}</div>
      <div class="arrow-icon"
        :style="dropdownMenuIsVisible ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.49984 6.00002L0.256836 1.75702L1.67184 0.343018L4.49984 3.17202L7.32784 0.343018L8.74284 1.75702L4.49984 6.00002Z"
            fill="#4478BB" />
        </svg>
      </div>
    </div>
    <transition name="fade">
      <ul 
        class="dropdown__menu" 
        v-show="dropdownMenuIsVisible"
        :style="dropdownMenuIsVisible ? {borderRadius: '0px 0px 4px 4px'} : {borderRadius: '4px'}"
      >
        <li 
          class="menu__item" 
          v-for="section in $options.tableDropdownSections" 
          :key="section.type"
          @click="chooseAndClose(section)"
          :style="!section.active && {pointerEvents: 'none', color: '#9c9c9c9c'}"
        >
          {{section.name}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'v-table-dropdown',
  data: () => ({
    currentSection: null,
    dropdownMenuIsVisible: false
  }),
  tableDropdownSections: [
    {name: 'Торговля', type: 'commerce', active: true},
    { name: 'Депозитарий', type: 'depository', active: true},
    { name: 'Эмиссия (IPO)', type: 'ipoIssue', active: false},
  ],
  methods: {
    chooseAndClose(section) {
      this.currentSection = section;
      this.dropdownMenuIsVisible = false
    }
  },
  mounted() {
    this.currentSection = this.$options.tableDropdownSections[0]
  },
  watch: {
    currentSection() {
      this.$emit('setCurrentSection', this.currentSection.type)
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
}

.dropdown {
  position: relative;

  &__current {
    cursor: pointer;
    display: flex;
    align-items: center;
    background: #E8F2FF;
    min-height: 30px;
    padding: 0px 33px;
  }

  &__menu {
    list-style: none;
    padding: 0;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background: #F9F9F9;
    padding: 10px;
    z-index: 10;

    &>*:not(:last-child) {
      margin: 0px 0px 5px 0px;
    }
  }
}

.current {
  &__name {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #4478BB;
  }
}

.arrow {
  &-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.menu {
  &__item {
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18 / 12 * 100%);
    color: #9C9C9C;
    transition: color 200ms ease;

    &:hover {
      color: #F48020;
    }
  }
}
</style>