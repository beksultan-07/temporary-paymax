<template>
  <div class="buysell_wrap">
    <v-sheet
        class="mx-auto"
        max-width="100%"
    >
      <v-slide-group
          v-model="model"
          class="pa-4"
          center-active
          :show-arrows="false"
          style="align-items: flex-start; background:#fbfbfb;padding: 0 !important;"
      >
        <v-slide-item
            v-for="(button,index) in buttons"
            :key="index"
            v-slot="{ active, toggle }"
        >
          <div class="col_item">
            <div class="item" :class="{item_active : activeButton === index}" @click="toggle">
              <button class="button" @click="activeButton = activeButton === index ? null : index">
                <div class="button__circle"></div>
                <span class="button__text">
                  {{ button.text }}
                </span>
                <img src="asset/market/arrows/arrow.svg" alt="arrow" class="arrow">
              </button>
              <div class="dropdown" :class="{dropdown_active : activeButton === index}">
                <buy-sell-select
                    :placeholder="'Market'"
                    :options="options"
                    :selected="selected"
                    @onSelect="onSelect"
                />
                <div class="dropdown__input-block">
                  <input type="text" placeholder="Size                            0.00000 | BTC " class="dropdown__input">
                  <img class="dropdown__icon" src="asset/market/arrows/circle-arrows.svg" alt="arrows">
                </div>
                <div class="buttons">
                  <button class="dropdown__button dropdown__button--green">Buy</button>
                  <button class="dropdown__button dropdown__button--red">Sell</button>
                </div>
              </div>
            </div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>

import BuySellSelect from "@/components/Market/MarketSelects/BuySellSelect";
export default {
  components: {BuySellSelect},
  data() {
    return {
      buttons: [
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
      ],
      options: [ 'Market IOC', 'Market 2', 'Market 3',],
      selected: null,
      model: null,
      activeButton: false,
    }
  },
  methods: {
    onSelect(selectedItem) {
      this.selected = selectedItem;
    },
  },
  // mounted() {
  //   document.querySelector('body').addEventListener('click', () => {
  //     this.activeButton = false
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.buysell_wrap {
  max-width: 1400px;
  padding: 30px 20px 0 20px;
  margin: 0 auto 30px auto;
}
.item {
  margin-right: 10px;
  background: #F7F7F7;
  border-radius: 4px;
  border: 1px solid #F7F7F7;
  padding: 0 0 10px 0;
  max-height: 45px;
  max-width: 155px;
  overflow: hidden;
  transition: .3s ease-in-out;
  &:not(.item_active):hover {
    border-color: #F48020;
  }
}
.item_active{
  max-height: 255px;
  max-width: 260px;
  width: 260px;
  overflow: unset;
  transition: .3s ease-in-out;
}
.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 0 10px;
  cursor: pointer;
  transition: .3s ease-in-out;
  width: 100%;
  margin-bottom: 15px;
  &__circle {
    background: #171717;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  &__text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    width: 71px;
    display: block;
  }
}
.dropdown{
  height: 0;
  transition: .3s ease-in-out;
  padding: 0 10px;
  &__select{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #9C9C9C;
  }
  &__input{
    &-block{
      width: 100%;
      position: relative;
      margin-bottom: 15px;
    }
    background: #FFFFFF;
    border-radius: 2px;
    width: 100%;
    padding: 10px 35px 10px 10px;
    outline: none;
    &::placeholder{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #9C9C9C;
    }
  }
  &__icon{
    position: absolute;
    top: 14px;
    right: 16px;
  }
  &__button{
    outline: none;
    padding: 9px 10pxs;
    width: 100%;
    transition: .3s ease-in-out;
    &--green{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #4AD2AA;
      border: 1px solid #4AD2AA;
      border-radius: 4px;
      &:hover{
        color: #fff;
        background: #4AD2AA;
      }
    }
    &--red{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #FF5656;
      border: 1px solid #FF5656;
      border-radius: 4px;
      &:hover{
        color: #fff;
        background: #FF5656;
      }
    }
  }
}
.dropdown_active{
  height: 100%;
}
.buttons{
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
}

</style>