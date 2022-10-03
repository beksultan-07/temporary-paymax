<template>
  <div class="trade-table">
    <div class="trade-table__header">
      <ul class="trade-table__sections">
        <li class="trade-table__section _is-active">Позиции</li>
        <li class="trade-table__section">Открытие ордера</li>
        <li class="trade-table__section">История ордеров</li>
        <li class="trade-table__section">История сделок</li>
        <li class="trade-table__section">История транзакция</li>
        <li class="trade-table__section">Активы</li>
      </ul>
      <div class="trade-table__dropdown dropdown" tabindex="0" @focusout="dropdownMenuIsVisible = false">
        <div 
          class="dropdown__current" 
          @click="dropdownMenuIsVisible = !dropdownMenuIsVisible" 
          :style="dropdownMenuIsVisible ? {borderRadius: '4px 4px 0px 0px'} : {borderRadius: '4px'}"
        >
          <div class="current__name">Торговля</div>
          <div class="arrow-icon" :style="dropdownMenuIsVisible ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.49984 6.00002L0.256836 1.75702L1.67184 0.343018L4.49984 3.17202L7.32784 0.343018L8.74284 1.75702L4.49984 6.00002Z"
                fill="#4478BB" 
              />
            </svg>
          </div>
        </div>
        <transition name="fade">
          <ul 
            class="dropdown__menu" 
            v-if="dropdownMenuIsVisible"
            :style="dropdownMenuIsVisible ? {borderRadius: '0px 0px 4px 4px'} : {borderRadius: '4px'}"
          >
            <li class="menu__item">Приказы</li>
            <li class="menu__item">Сделки</li>
            <li class="menu__item">Депонирование ЦБ</li>
            <li class="menu__item">Депонирование ДС</li>
            <li class="menu__item">Депо-операции</li>
            <li class="menu__item">Эмиссия (IPO)</li>
            <li class="menu__item">Списание ЦБ</li>
            <li class="menu__item">Списание ДС</li>
          </ul>
        </transition>
      </div>
    </div>
    <div class="trade-table__body">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Дата и время</th>
            <th>Тип</th>
            <th>Счёт</th>
            <th>Агент</th>
            <th>Инструмент</th>
            <th style="text-align: end;">Количество</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th>Валюта</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in 10">
            <td>10054</td>
            <td>04.08.2022 16:36:53</td>
            <td>Регистрационная на покупку</td>
            <td>3-3101-10043</td>
            <td>ОАО "Группа К51"</td>
            <td style="color: #4478BB;">КМОТ</td>
            <td style="text-align: end;">1</td>
            <td style="color: #4AD2AA;">2,512</td>
            <td style="color: #4AD2AA;">2,512</td>
            <td>KGS</td>
            <td><img src="../../../assets/table-icons/galochka.svg" alt="galochka"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-trade-table',
  data: () => ({
    dropdownMenuIsVisible: false
  })
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

.trade-table {
  max-width: 1231px;
  background: #ffffff;
  border-radius: 4px;
  padding: 20px 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 25px 0px;
  }

  &__sections {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    &>*:not(:last-child) {
      margin: 0px 20px 0px 0px;
    }
  }
  &__section {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #9C9C9C;
    padding: 0px 10px 2px 10px;
    &:hover {
      color: #F48020;
    }
    &._is-active {
      color: #F48020;
      border-bottom: 1px solid #F48020;
    }
  }
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
    z-index: 2;
    & > *:not(:last-child) {
      margin: 0px 0px 5px 0px;
    }
  }
}

.current {
  &__name {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color:#4478BB;
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

table {
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18 / 12 * 100%);
  color: #252525;
  table-layout: fixed;
  width: 100%;
  display: block;
  max-height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #F2F2F2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9C9C9C;
    border-radius: 10px;
  }
  thead {
    position: sticky;
    top: 0;
    background: #ffffff;
    /* tr {
      position: relative;
      display: block;
    } */
  }
  tbody {
    width: 100%;
    /* overflow: auto;
    max-height: 200px;
    &::-webkit-scrollbar {
      width: 0;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #F2F2F2;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9C9C9C;
      border-radius: 10px;
    } */
  }
  th, td {
    padding: 10px;
    text-align: left;
    width: 110px;
    &:nth-child(1) {
      width: 70px;
    }
    &:nth-child(2) {
      width: 150px;
    }
    &:nth-child(3) {
      width: 120px;
    }
    &:nth-child(5) {
      width: 120px;
    }
    &:nth-child(11) {
      width: 50px;
    }
  }
}
</style>