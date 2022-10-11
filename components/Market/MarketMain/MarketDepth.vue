<template>
  <div class="depth__wrap">
    <h3 class="depth__title">Market Depth</h3>
    <div class="depth__content">
      <div class="depth__table">
        <div class="depth__table-item">
          <span class="depth__table-top-text">Size</span>
          <span class="depth__table-top-text">Price</span>
        </div>
        <ul class="depth__table-list right-line">
          <li v-for="(item, index) in firstTable" :key="index" class="depth__table-item graphic__bg--green">
            <span class="depth__table-text depth__table-num">{{item.num}}</span>
            <span class="depth__table-text depth__table-green-num">{{item.greenNum}}</span>
          </li>
        </ul>
      </div>
      <div class="depth__table right__table">
        <div class="depth__table-item">
          <span class="depth__table-top-text">Price</span>
          <span class="depth__table-top-text">Size</span>
        </div>
        <ul class="depth__table-list">
          <li v-for="(item, index) in secondTable" :key="index" class="depth__table-item graphic__bg--red">
            <span class="depth__table-text depth__table-red-num">{{item.redNum}}</span>
            <span class="depth__table-text depth__table-num">{{item.num}}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      firstTable:[
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
        {num: '2,771.6053', greenNum: '0.9160'},
      ],
      secondTable:[
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
        {num: '2,771.6053', redNum: '0.9160'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.depth{
  &__wrap{
    margin: 0 auto;
    max-width: 560px;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
  }
  &__content{
    display: flex;
    align-items: flex-start;
    gap: 3px;
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 20px;
  }
  &__table{
    width: 300px;
    &-list{
      margin-top: 20px;
      padding: 0;
    }
    &-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &-top-text{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      color: #252525;
      display: block;
    }
    &-text{
      display: block;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      z-index: 2;
    }
    &-green-num{
      color: #4AD2AA;
    }
    &-red-num{
      color: #FF5656;
    }

    &-num{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #252525;
    }
  }
}
.right-line{
  border-right: 1px solid #f7f7f7;
  padding-right: 3px;
}
.graphic{
  &__bg{
    &--green{
      padding: 2px 0;
      position: relative;
      &:nth-child(1){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 26px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(2){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 32px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(3){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 40px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(4){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 46px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(5){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 46px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(6){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 52px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(7){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 52px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(8){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 56px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(9){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 62px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(10){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 69px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(11){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 77px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(12){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 83px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(13){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 87px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(14){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 98px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(15){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 107px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(16){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 124px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(17){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 142px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(18){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 160px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(19){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 173px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
      &:nth-child(20){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 185px;
          top: 0;
          right: 0;
          background: #D0FFF1;
          z-index: 1;
        }
      }
    }
    &--red{
      padding: 2px 0;
      position: relative;
      &:nth-child(1){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 26px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(2){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 32px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(3){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 40px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(4){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 46px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(5){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 46px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(6){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 52px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(7){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 52px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(8){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 56px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(9){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 62px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(10){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 69px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(11){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 77px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(12){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 83px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(13){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 87px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(14){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 98px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(15){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 107px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(16){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 124px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(17){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 142px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(18){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 160px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(19){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 173px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
      &:nth-child(20){
        &::after{
          content: '';
          position: absolute;
          height: 100%;
          width: 185px;
          top: 0;
          left: 0;
          background: #FFDFDF;
          z-index: 1;
        }
      }
    }
  }
}
.right__table{
  @media (max-width: 600px) {
    display: none;
  }
}
</style>