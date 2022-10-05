<template>
    <div class="header-wrap">
      <div class="header">
        <h3 class="header__title">
          Биржевой стакан
        </h3>
        
        <button class="header__icon" @click="changeView('blocks')">
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#F4293E"/>
            <rect width="5" height="5" transform="translate(0 6)" fill="#4AD2AA"/>
            <rect width="4" height="3" transform="translate(6)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(6 4)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(6 8)" fill="#9C9C9C"/>
          </svg>
        </button>
  
        <button class="header__icon" @click="changeView('minus')">
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="11" fill="#F4293E"/>
            <rect width="4" height="3" transform="translate(6)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(6 4)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(6 8)" fill="#9C9C9C"/>
          </svg>
        </button>
  
        <button class="header__icon" @click="changeView('plus')">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="11" fill="#4AD2AA"/>
            <rect width="4" height="3" transform="translate(7)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(7 4)" fill="#9C9C9C"/>
            <rect width="4" height="3" transform="translate(7 8)" fill="#9C9C9C"/>
          </svg>
        </button>
  
        <button class="request-btn" @click.stop="tickDropDown = !tickDropDown">
          {{tick}}
          <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.99957 4.00009L0.170898 1.17143L1.11423 0.22876L2.99957 2.11476L4.8849 0.22876L5.82823 1.17143L2.99957 4.00009Z" fill="#252525"/>
          </svg>
  
          <div class="drop-down" :class="{
            'active': tickDropDown
          }">
            <button 
              v-for="t in sortTickers()"
              :key="Date.now() + t"
              class="item" 
              @click="selectTick(t)"
            >
              {{t}}
            </button>
          </div>
        </button>
      </div>

      <ul class="table">
        <li class="table-row-header">
          <p class="table-col-name">Цена(USDT)</p>
          <p class="table-col-name">Размер(ETH)</p>
          <p class="table-col-name">Сумма(ETH)</p>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: 'v-settings-header',

        data() {
          return {
            tickDropDown: false
          }
        },

        props: {
          tick: Number,
          ticks: Array
        }, 

        methods: {
          sortTickers() {
            return this.ticks.filter(el => el !== this.tick)
          },
          selectTick(t){
            this.$emit('selectTick', t)
          },
          changeView(v){
            // console.log('settings header', v);
            this.$emit("changeView", v)
          }
        },

        mounted() {
          document.addEventListener('click', () => this.tickDropDown = false)
        },
    }
</script>

<style lang="scss" scoped>
  .header{
    &-wrap{
      
    }
    display: flex;
      align-items: center;

      &__title{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: #252525;
      }
      &__icon{
        width: 10px;
        border: none;
        background: none;
        outline: none;
        margin: 0 0 0 10px;
    
        svg{
          width: 100%;
        }
      }
    }
  .request-btn{
    outline: none;
    background: #F9F9F9;
    position: relative;
    border-radius: 2px;
    padding: 0 8px;
    border: none;
    margin: 0 0 0 auto;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    color: #252525;
    
    display: flex;
    align-items: center;
    
    .drop-down{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: .3s;
      visibility: hidden;
      opacity: 0;
      
      &.active{
        top: 100%;
        visibility: visible;
        opacity: 1;
      }
      .item{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        text-align: start;
        padding: 0 8px;
        color: #252525;
        background: #F9F9F9;
        transition: .3s;

        width: 100%;

        &:hover{
          background: #DCDCDC;
        }
      }
    }
    svg{
      margin: 0 0 0 5px;
    }
  }
    
  .table{
      padding: 0;
      list-style: none;
      &-row{
        &-header{
          margin: 10px 0 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      &-col{
        &-name{
          font-family: 'Helvetica';
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 18px;
          color: #252525;
          margin: 0;
        }
      }
    }
</style>