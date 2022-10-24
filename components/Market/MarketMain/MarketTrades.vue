<template>
  <div class="trades_wrap">
    <h3 class="trades__title">Last Trades</h3>

    <v-data-table :headers="headers" :items="data" hide-default-footer disable-filtering :mobile-breakpoint="0">
      <template v-slot:item.side="{ item }">
        <p class="mb-0" :class="item.side === 'Sell' ? 'red--text': 'teal--text' ">
          {{ item.side }}
        </p>
      </template>
      <template v-slot:item.price="{ item }">
        <p class="mb-0" :class="item.side === 'Sell' ? 'red--text': 'teal--text' ">
          {{ item.price }}
        </p>
      </template>
    </v-data-table>


    <button class="trades__button bottom-btn">
      See History
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      headers: [
        {
          text: 'Instrument',
          align: 'start',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'instrument',
        },
        {
          text: 'Side',
          align: 'start',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'side',
        },
        {
          text: 'Price',
          align: 'start',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'price',
        },
        {
          text: 'Size',
          align: 'start',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'size',
        },
        {
          text: 'Volume',
          align: 'start',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'volume',
        },
      ],
      data: [
        {
          instrument: 'LTC-BTC',
          side: 'Sell',
          price: 0.00264980,
          size: 1.00000000,
          volume: 0.00264980
        },
        {
          instrument: 'LTC-BTC',
          side: 'Buy',
          price: 0.00264980,
          size: 1.00000000,
          volume: 0.00264980
        },
        {
          instrument: 'LTC-BTC',
          side: 'Sell',
          price: 0.00264980,
          size: 1.00000000,
          volume: 0.00264980
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.trades_wrap {
  width: 100%;
  min-width: 300px;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  min-height: 600px;
  position: relative;
}

.trades {
  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
  }

  &__button {
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }

  &__data-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
}

.bottom-btn {
  position: absolute;
  bottom: 20px;
  left: 10px;
}
</style>