<template>
  <div class="positions_wrap">
    <div class="positions__top">
      <h3 class="positions__title">Not Open Positions</h3>
      <button class="positions__button">Total Equaity <span class="blue-line">—</span></button>
    </div>
    <positions-select :placeholder="'Group by counterparty'" :options="options" :selected="selected"
      @onSelect="onSelect" />

    <v-data-table :headers="headers" :items="data" hide-default-footer disable-filtering class="mt-5">
      <template v-slot:item.position="{ item }">
        <p class="mb-0" :class="item.position[0] === '-' ? 'red--text': 'teal--text' ">
          {{ item.position }}
        </p>
      </template>

      <template v-slot:body.prepend>
        <div class="d-flex mt-2 mb-2">
          <v-chip label class="blue-grey lighten-5 mr-2">
            Equilty:
            <span class="indigo--text accent-3--text">
              1126.79
            </span>
          </v-chip>

          <v-chip label class="blue-grey lighten-5">
            FM-Test-MM
            <span class="indigo--text accent-3--text">
              (87)
            </span>
          </v-chip>
        </div>
      </template>
    </v-data-table>

    <NuxtLink to="positions" class="positions__button bottom-btn">
      Not Open Positions
    </NuxtLink>
  </div>
</template>

<script>
import PositionsSelect from "@/components/Market/MarketSelects/PositionsSelect";
export default {
  components: { PositionsSelect },
  data() {
    return {
      options: ['Group by counterparty', 'counterparty 2', 'counterparty 3',],
      selected: null,
      headers: [
        {
          text: 'Counterparty / Asset',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'asset',
        },
        {
          text: 'Position	',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'position',
        },
        {
          text: 'Price',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'price',
        },
        {
          text: 'Position, $',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'sumPosition',
        },
      ],
      data: [
        {
          asset: 'AUD',
          position: '-29402.36000000',
          price: '0.63',
          sumPosition: '-18523.49'
        },
        {
          asset: 'BTC',
          position: '1.00264980',
          price: '19660.12',
          sumPosition: '19720.30'
        },
        {
          asset: 'LTC',
          position: '-1.00000000',
          price: '52.15',
          sumPosition: '-52.19'
        },
      ]
    }
  },
  methods: {
    onSelect(selectedItem) {
      this.selected = selectedItem;
    },
  },
}
</script>

<style lang="scss" scoped>
.positions_wrap {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  min-height: 600px;
  position: relative;
}

.blue-line {
  color: #496AFF;
}

.positions {
  &__button {
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    text-decoration: none;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 335px) {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }
  }

  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
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