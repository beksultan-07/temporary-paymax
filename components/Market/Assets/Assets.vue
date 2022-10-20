<template>
  <div class="assets__wrap">
    <div class="assets__container">
      <div class="cols">
        <div class="assets__content">
          <div class="assets__top">
            <h3 class="assets__title">Assets</h3>
            <div class="assets__right">
              <button class="assets__button gray-text" @click="openAll">Expand All</button>
              <button class="assets__button gray-text" @click="closeAll">Collapse All</button>
            </div>
          </div>
          <div class="asset">
            <div class="asset__top">
              <div class="between">
                <div class="gray-text">Asset / CP</div>
                <div class="gray-text">Overnight rate, %</div>
              </div>
            </div>
            <div class="asset__items">
              <div
                  class="asset__item" :class="{asset__item_active: asset.active}"
                  v-for="(asset, index) in assets"
                  :key="index"
              >
                <button class="asset__item-top" @click="asset.active = !asset.active">
                  <svg class="arrow" :class="{arrow_active: asset.active}" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.99999 6L0.756989 1.757L2.17199 0.343002L4.99999 3.172L7.82799 0.343002L9.24299 1.757L4.99999 6Z"
                        fill="#868686"/>
                  </svg>
                  <span class="asset__item-text">{{ asset.name }}</span>
                </button>
                <div class="dropdown">
                  <button
                      class="dropdown__button between"
                      :class="{dropdown__button_active: asset.active, dropdown__button_active_info: buttonActive === index}"
                      @click="currentAsset = asset; asset.active = true; buttonActive = buttonActive === index ? null : index"
                  >
                    {{ asset.dropText }}
                    <span>{{ asset.rate }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="assets__content details">
          <div class="details__empty" v-if="currentAsset === null">
            <h3 class="assets__title details__title">Asset details</h3>
            <p class="details__text">To view detailed information, select an asset from the list on the left</p>
          </div>
          <div class="details__info" v-else>
            <div class="asset__top details__top">
              <h1 class="details__name">{{currentAsset.name}}</h1>
            </div>
            <div class="details__items">
              <div class="details__item between">
                <h4 class="details__item-name">Maker</h4>
                <h4 class="details__item-answer">{{ currentAsset.dropText }}</h4>
              </div>
              <div class="details__item between">
                <h4 class="details__item-name">Current price, $</h4>
                <h4 class="details__item-answer">{{ currentAsset.price }}</h4>
              </div>
              <div class="details__item between">
                <h4 class="details__item-name">Balance step</h4>
                <h4 class="details__item-answer">{{ currentAsset.balance }}</h4>
              </div>
              <div class="details__item between">
                <h4 class="details__item-name">Overnight rate, %</h4>
                <h4 class="details__item-answer">{{ currentAsset.rate }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default  {
  data() {
    return {
      currentAsset: null,
      assets: [
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'gsd', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'xgx', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'cbc', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'xcbxc', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'cbx', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
        {name: 'bnb', dropText: 'FM-Test-MM (87)', price: '0.67',balance: '0.01000000',rate: '—' , active: false,},
      ],
      buttonActive: false,
    }
  },
  methods:{
    openAll(){
      this.assets.filter((item) =>{
        item.active = true
      })
    },
    closeAll(){
      this.assets.filter((item) =>{
        item.active = false
      })
    },

  }
}
</script>

<style lang="scss" scoped>
.assets {
  &__container {
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__wrap {
    padding-top: 30px;
    background: #fbfbfb;
  }

  &__content {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 10px;
    min-height: 600px;
    position: relative;
  }

  &__button {
    transition: .3s ease-in-out;
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
  }
}
.asset {
  &__top {
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }

  &__item {
    cursor: pointer;
    max-height: 40px;
    overflow-y: hidden;
    border-bottom: 1px solid #EAEAEA;
    transition: .3s ease-in-out;
    &-top{
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      transition: .3s ease-in-out;
      &:hover{
        background: rgb(247, 247, 247);
      }
    }
    &-text {
      display: block;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #171717;
      text-transform: uppercase;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -12px;
        transform: translateY(-50%);
        background: #D9D9D9;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    }
  }
  &__item_active {
    max-height: 80px;
  }
}
.cols{
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
}
.details{
  &__title{
    text-align: center;
    margin-bottom: 10px;
  }
  &__text{
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #868686;
  }
  &__item{
    padding: 10px;
    border-bottom: 1px solid #EAEAEA;
    &:last-child{
      border: none;
    }
    &-name{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #171717;
    }
    &-answer{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: #171717;
    }
  }
  &__top{
    margin-bottom: 40px;
  }
  &__name{
    text-transform: uppercase;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
  }
}
.dropdown{
  &__button{
    padding-left: 30px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #171717;
    width: 100%;
    outline: none;
    transition: .3s ease-in-out;
    &:hover{
      background: rgb(247, 247, 247);
    }
    &_active{
      padding: 10px 20px 10px 30px;
    }
    &_active_info{
      background: rgb(247, 247, 247);
    }
  }
}
.arrow{
  transition: .3s ease-in-out;
  &_active{
    transform: rotate(180deg);
  }
}
.between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gray-text {
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #868686;
}
</style>