<template>
  <header class="header">
    <div class="content">
      <div class="overlay" :class="{overlay_active: burger}" @click="burger = false"></div>
      <div class="header__left">
        <button @click="burger = !burger" class="burger__btn" :class="{burger__none: burger}">
          <img src="asset/market/hamburger-icon/burger.svg" alt="hamburger">
        </button>
        <nav class="navbar" :class="{navbar_active: burger}">
          <button @click="burger = !burger" class="burger__btn navbar__burger-btn">
            <img src="asset/market/hamburger-icon/burger.svg" alt="hamburger">
          </button>
          <div class="header__right-adaptive">
            <div class="buttons">
              <button class="header__right-btn">1CP Enabled (87)</button>
              <button class="header__right-btn">Envoys.Vision</button>
            </div>
          </div>
          <div class="navbar__item">
            <span class="navbar__item-title">Trade</span>
            <ul class="navbar__list">
              <li v-for="(link, index) in tradeLinks" :key="index">
                <NuxtLink @click="burger = false" :to="link.href" class="navbar__link">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="navbar__item">
            <span class="navbar__item-title">Trade</span>
            <ul class="navbar__list">
              <li v-for="(link, index) in settlementLinks" :key="index">
                <NuxtLink @click="burger = false" :to="link.href" class="navbar__link">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="navbar__item">
            <span class="navbar__item-title">Trade</span>
            <ul class="navbar__list">
              <li v-for="(link, index) in historyLinks" :key="index">
                <NuxtLink @click="burger = false" :to="link.href" class="navbar__link">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="navbar__item">
            <span class="navbar__item-title">Trade</span>
            <ul class="navbar__list">
              <li v-for="(link, index) in apiLinks" :key="index">
                <NuxtLink @click="burger = false" :to="link.href" class="navbar__link">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
        <div class="logo__block">
          <NuxtLink to="/market" class="logo__link">
            <img src="../../static/asset/market/logo/logo.svg" alt="logo">
          </NuxtLink>
        </div>
      </div>
      <div class="search">
        <div class="search__cols">
          <div class="search__block">
            <img src="../../static/asset/market/search-icon/search.svg" alt="search" class="search__icon">
            <input placeholder="Search" type="search" class="search__input-field">
          </div>
          <div class="buttons search__buttons">
            <button v-for="(button, index) in btcButtons" :key="index" class="search__btn">
              {{ button.text }}
              <svg v-if="button.icon" class="icon" width="12" height="14" viewBox="0 0 12 14" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.7 7.03333L12 10.3333L8.7 13.6333L7.75733 12.6907L9.448 10.9993L0.666667 11V9.66667H9.448L7.75733 7.976L8.7 7.03333ZM3.3 0.366669L4.24267 1.30934L2.552 3H11.3333V4.33333H2.552L4.24267 6.024L3.3 6.96667L0 3.66667L3.3 0.366669Z"
                    fill="current"/>
              </svg>
              <span class="none" v-else></span>
            </button>
          </div>
        </div>
      </div>
      <div class="header__right">
        <div class="buttons">
          <button class="header__right-btn">1CP Enabled (87)</button>
          <button class="header__right-btn">Envoys.Vision</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
      tradeLinks: [
        {text: 'Trading', href: '#'},
        {text: 'Positions', href: 'positions'},
        {text: 'Limits', href: 'limits'},
        {text: 'Assets', href: 'market-assets'},
      ],
      settlementLinks: [
        {text: 'Requests', href: 'requests'},
        {text: 'Transactions', href: '#'},
      ],
      historyLinks: [
        {text: 'Trades', href: 'trades'},
        {text: 'Settlements', href: '#'},
      ],
      apiLinks: [
        {text: 'Keys', href: '#'},
        {text: 'Specification', href: '#'},
      ],
      btcButtons: [
        {text: 'BTC', icon: true},
        {text: 'ETH', icon: false},
        {text: 'USDC', icon: false},
        {text: 'USDT', icon: false},
        {text: 'USD', icon: false},
        {text: 'EUR', icon: false},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #FBFBFB;
  position: relative;
  z-index: 10;

  &__left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__right {
    margin-left: auto;
    @media(max-width: 1085px) {
      display: none;
    }

    &-btn {
      background: #FFFFFF;
      border-radius: 4px;
      padding: 12px 14px;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
    }
  }

  &__right-adaptive {
    display: none;
    position: absolute;
    top: 20px;
    left: 55px;
    @media(max-width: 1085px) {
      display: block;
    }
  }
}

.icon {
  path {
    transition: .3s ease-in-out;
    fill: #868686;
  }
}

.none {
  display: none;
}

.content {
  margin: 0 auto;
  max-width: 1400px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media(max-width: 700px) {
    justify-content: space-between;
  }
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  visibility: hidden;
  min-height: 100vh;
  transition: .3s ease-in-out;
  opacity: 0;
  z-index: 1;
}

.overlay_active {
  opacity: 1;
  visibility: visible;
}

.burger__btn {
  outline: none;
}
.burger__none{
  display: none;
}
.navbar__burger-btn{
  position: absolute;
  top: 28px;
  left: 20px;
}

.navbar {
  z-index: 9;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  top: 0;
  left: 0;
  background: #fff;
  width: 350px;
  padding: 0 20px;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  transition: .4s ease-in-out;
  transform: translateX(-100%);
  @media(max-width: 425px) {
    width: 100%;
  }

  &__item {

    &-title {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #868686;
      display: inline-block;
      margin-bottom: 15px;
    }
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-direction: column;
  }

  &__link {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #171717;
    text-decoration: none;
    transition: .3s ease-in-out;

    &:hover {
      color: #F48020;
    }
  }
}

.navbar_active {
  transform: translateX(0);
}

.buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.search {
  &__cols {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__block {
    position: relative;
    width: 230px;
    height: 40px;
    @media(max-width: 370px) {
      width: 180px;
    }
  }

  &__input-field {
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    border-radius: 4px;
    outline: none;
    padding: 10px 35px;

    &::placeholder {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #868686;
    }
  }

  &__icon {
    position: absolute;
    left: 10px;
    top: 13px;
  }

  &__buttons {
    @media(max-width: 780px) {
      display: none;
    }
  }

  &__btn {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    padding: 12px 10px;
    background: #F7F7F7;
    border-radius: 4px;
    transition: .3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      background: #F48020;
      color: #FBFBFB;
    }

    &:hover .icon {
      path {
        fill: #fff;
      }
    }

  }

  img {
    display: block;
  }
}
</style>