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
            <img src="asset/market/logo/logo.svg" alt="logo">
          </NuxtLink>
        </div>
      </div>
      <div class="header__right">
        <navbar-dropdown/>
      </div>
    </div>
  </header>
</template>

<script>
import NavbarDropdown from "@/components/Market/Navbars/NavbarDropdown";
export default {
  components: {NavbarDropdown},
  data() {
    return {
      tradeLinks: [
        {text: 'Trading', href: 'market'},
        {text: 'Positions', href: 'positions'},
        {text: 'Limits', href: 'limits'},
        {text: 'Assets', href: 'market-assets'},
      ],
      settlementLinks: [
        {text: 'Requests', href: 'requests'},
        {text: 'Transactions', href: 'transactions'},
      ],
      historyLinks: [
        {text: 'Trades', href: 'trades'},
        {text: 'Settlements', href: '#'},
      ],
      apiLinks: [
        {text: 'Keys', href: '#'},
        {text: 'Specification', href: '#'},
      ],
      burger: false,


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
  }
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
</style>