<template>
  <div> 
    <div class="instrument__block">
      <div class="instrument">Инструмент: <strong class="strong">FPI</strong></div>
      <div class="max">Макс</div>
    </div>
    <div class="price">Цена: <strong class="strong">0 USD</strong></div>

    <div class="autoschedules">
      <div class="autoschedule">Авто списание ДС</div>
      <div 
        class="switcher"
        :class="{
          '_is-active': switcherIsActive
        }"
        @click="switcherIsActive = !switcherIsActive"
      >
        <div class="switcher__track">
          <div class="switcher__thumb"></div>
        </div>
      </div>  
    </div>

    <form class="form">
      <div class="input">
        <v-my-select :options="invoiceSelect.options" @invoiceOnSelect="invoiceOnSelect"
          :selected="invoiceSelect.selected" placeholder="Счёт" />
      </div>
      <div class="input">
        <div class="input__name">Цена</div>
        <input class="field" placeholder="USD" type="number" name="price">
      </div>
      <div class="input">
        <div class="input__name">Количество</div>
        <input class="field" placeholder="USD" type="number" name="quantity">
      </div>
      <div class="input">
        <div class="input__name">Всего</div>
        <input class="field" placeholder="USD" type="number" name="total">
      </div>
    </form>
  </div>
</template>

<script>
import MySelectVue from '../MySelect/MySelect.vue';

export default {
  name: 'v-component-sell',
  components: {
    'v-my-select': MySelectVue
  },
  data: () => ({
    switcherIsActive: false,
    invoiceSelect: {
      options: ['item1', 'item2', 'item3', 'item3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
    buyerSelect: {
      options: ['buyer1', 'buyer2', 'buyer3', 'item3', 'item3', 'item3', 'item3'],
      selected: null
    },
  }),
  methods: {
    invoiceOnSelect(selectedItem) {
      this.invoiceSelect.selected = selectedItem;
    },
    buyerOnSelect(selectedItem) {
      this.buyerSelect.selected = selectedItem;
    },
  },
}
</script>

<style lang="scss" scoped>
.instrument__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9C9C9C;
  font-weight: 400;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
  margin: 0px 0px 15px 0px;
}

.price {
  color: #9C9C9C;
  font-weight: 400;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
  margin: 0px 0px 15px 0px;
}

.strong {
  color: #4478BB;
  font-weight: 700;
  font-size: 10px;
  line-height: calc(18 / 10 * 100%);
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.input {
  &__name {
    font-weight: 400;
    font-size: 10px;
    line-height: calc(18 / 10 * 100%);
    color: #9C9C9C;
    margin: 0px 0px 2px 0px;
  }

  &:last-child {
    grid-column: 1 / 3;
  }

  &:nth-child(1) {
    grid-column: 1 / 3;
  }
}

.field {
  width: 100%;
  min-height: 35px;
  background: #F9F9F9;
  border-radius: 2px;
  padding: 0px 0px 0px 10px;
  font-weight: 400;
  font-size: 12px;
  color: #252525;

  &::placeholder {
    color: #9C9C9C;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
}

.autoschedules {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.autoschedule {
  font-weight: 400;
  font-size: 10px;
  color: #9C9C9C;
}

.switcher {
  cursor: pointer;
  margin: 0px 0px 15px 0px;
  &__track {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 2px;
    min-width: 40px;
    min-height: 20px;
    background: #E2E2E2;
    border-radius: 80px;
    transition: transform 200ms ease;
  }
  &__thumb {
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 110px;
    transform: translateX(0);
    transition: transform 200ms ease;
  }
  &._is-active {
    .switcher__track {
      background-color: #4478BB;
    }
    .switcher__thumb {
      transform: translateX(20px);
    }
  }
}
</style>