<template>
  <div class="global__wrap">
    <div class="global__top">
      <h3 class="global__title">Global Limits <span class="global__title--green">Limits set</span></h3>
      <button class="global__edit">
        <svg class="global__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div class="global__content">
      <div class="global__content-left">
        <div class="global__between" v-for="(item, index) in leftItems" :key="index">
          <h5 class="global__text">{{ item.text }}</h5>
          <p
              class="global__text"
              :class="{global__text_green: item.green,global__text_blue: item.blue}"
          >
            {{ item.num }}
          </p>
        </div>
      </div>
      <div class="global__content-right">
        <div class="global__between" v-for="(item, index) in rightItems" :key="index">
          <h5 class="global__text">{{ item.text }}</h5>
          <p
              class="global__text"
              :class="{global__text_green: item.green,global__text_blue: item.blue}"
          >
            {{ item.num }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      leftItems:[
        {text: 'Net Limit', num: '100.00000000 BTC', green: false, blue: true},
        {text: 'Net Exposhure', num: '— BTC', green: false, blue: false},
        {text: 'Net Free', num: '100.00000000 BTC', green: true, blue: false},
      ],
      rightItems:[
        {text: 'Net Limit', num: '100.00000000 BTC', green: false, blue: true},
        {text: 'Net Exposhure', num: '— BTC', green: false, blue: false},
        {text: 'Net Free', num: '100.00000000 BTC', green: true, blue: false},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.global{
  &__wrap{
    grid-column: 2 span;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    width: 900px;
    @media (max-width: 900px) {
      grid-column: unset;
    }
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
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    display: flex;
    align-items: center;
    gap: 10px;
    &--green{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #4AD2AA;
    }
  }
  &__content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    &-left{
      width: 100%;
    }
    &-right{
      width: 100%;
    }
  }
  &__between{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &:last-child{
      margin: 0;
    }
  }
  &__text{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    margin: 0;
    &_green{
      color: #4AD2AA;
    }
    &_blue{
      color: #4478BB;
    }
  }
}
</style>