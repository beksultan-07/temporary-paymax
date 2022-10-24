<template>
  <div class="limit__wrap">
    <div class="limit__top">
      <h3 class="limit__title">FM-Test-MM (87) <span class="limit__title--green">Limits set</span></h3>
      <button class="limit__edit">
        <svg class="limit__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_95_4917)">
            <rect width="24" height="24" rx="12" fill="current"/>
            <path
                d="M14.4991 10.4451L13.5549 9.50087L7.3355 15.7203V16.6645H8.2797L14.4991 10.4451ZM15.4433 9.50087L16.3875 8.55667L15.4433 7.61247L14.4991 8.55667L15.4433 9.50087ZM8.8326 18H6V15.1667L14.9712 6.19551C15.0964 6.07032 15.2663 6 15.4433 6C15.6204 6 15.7902 6.07032 15.9154 6.19551L17.8045 8.08457C17.9297 8.2098 18 8.37961 18 8.55667C18 8.73374 17.9297 8.90355 17.8045 9.02877L8.83326 18H8.8326Z"
                fill="#CBCBCB"/>
          </g>
          <defs>
            <clipPath id="clip0_95_4917">
              <rect width="24" height="24" rx="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <div class="scroll">
      <div class="limit__content">
        <div class="limit__cp limit__item">
          <h4 class="limit__item-title">CP Limits</h4>
          <div class="limit__between" v-for="(item, index) in cpLimits" :key="index">
            <h5 class="limit__text">{{ item.text }}</h5>
            <p class="limit__text limit__text_black">
              {{ item.num }}<span class="limit__text">{{ item.zero }}</span>
            </p>
          </div>
        </div>
        <div class="limit__your limit__item">
          <h4 class="limit__item-title">Your Limits</h4>
          <div class="limit__between" v-for="(item, index) in yourLimits" :key="index">
            <h5 class="limit__text">{{ item.text }}</h5>
            <p class="limit__text limit__text_blue">
              {{ item.num }}<span class="limit__text">{{ item.zero }}</span>
            </p>
          </div>
        </div>
        <div class="limit__applied limit__item">
          <h4 class="limit__item-title">Applied</h4>
          <div class="limit__between" v-for="(item, index) in appliedLimits" :key="index">
            <h5 class="limit__text">{{ item.text }}</h5>
            <p
                class="limit__text"
                :class="{limit__text_green: item.green,limit__text_blue: item.blue}"
            >
              {{ item.num }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpLimits: [
        {text: 'Gross Limit', num: '100', zero: '.00000000 BTC'},
        {text: 'Gross Exposhure', num: '', zero: '- BTC'},
        {text: 'Gross Free', num: '100', zero: '.00000000 BTC'},
        {text: 'Net Limit', num: '100', zero: '.00000000 BTC'},
        {text: 'Net Exposhure', num: '', zero: '- BTC'},
        {text: 'Net Free', num: '100', zero: '.00000000 BTC'},
      ],
      yourLimits: [
        {num: '100', zero: '.00000000 BTC'},
        {num: '', zero: '– BTC'},
        {num: '100', zero: '.00000000 BTC'},
        {num: '100', zero: '.00000000 BTC'},
        {num: '', zero: '– BTC'},
        {num: '100', zero: '.00000000 BTC'},
      ],
      appliedLimits: [
        {num: '2,012,893.00 USD', green: false, blue: true},
        {num: '—', green: false, blue: false},
        {num: '2,012,893.00 USD', green: true, blue: false},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.limit {
  &__wrap {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    overflow: hidden;
    grid-column: 3 span;
  }
  &__icon{
    g > rect{
      transition: .3s ease-in-out;
      fill: #EDEDED;
    }
    &:hover{
      g > rect{
        fill: #D0FFF1;
      }

    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    display: flex;
    align-items: center;
    gap: 10px;

    &--green {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #4AD2AA;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    width: 990px;
  }

  &__item {
    width: 100%;

    &-title {
      margin-bottom: 20px;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
      display: flex;
      justify-content: flex-end;
    }
  }

  &__between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }
  }

  &__text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    margin: 0;

    &_black {
      color: #171717;
    }

    &_green {
      color: #4AD2AA;
    }

    &_blue {
      color: #4478BB;
    }

    &_small {
      font-size: 12px;
    }
  }
}
.scroll{
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: #9C9C9C;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
  }
  &::-webkit-scrollbar-track{
    background: #F2F2F2;
    border-radius: 10px;
  }
}
</style>