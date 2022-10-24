<template>
  <div class="trades__wrap">
    <div class="trades__container">
      <div class="trades__content">
        <div class="trades__top">
          <h3 class="trades__title">Trades History</h3>
          <div class="trades__right">
            <div class="trades__choose">
              <button v-for="(button, index) in buttons" :key="index" class="trades__choose_button"
                @click="active = active === index ? null : index" :class="{trades__choose_active: active === index}">
                {{ button.text }}
              </button>
            </div>
            <button class="trades__download">Download .CSV</button>
          </div>
        </div>

        <div class="trades__data-text">
          <Table></Table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Table from './Table.vue';

export default {
  data() {
    return {
      buttons: [
        { text: "Orders" },
        { text: "Trades" }
      ],
      active: false,
    };
  },
  components: { Table }
}
</script>

<style lang="scss" scoped>
.trades {
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

  &__download {
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #868686;
  }

  &__choose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;

    &_button {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #868686;
      transition: .3s ease-in-out;

      &:first-child {
        border-right: 1px solid #868686;
        padding-right: 5px;
      }

      &:hover {
        color: #171717;
      }
    }

    &_active {
      color: #171717;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 430px) {
      flex-direction: column;
      gap: 30px;
    }
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
</style>