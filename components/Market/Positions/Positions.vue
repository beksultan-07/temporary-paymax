<template>
  <div class="positions__wrap">
    <div class="positions__container">
      <div class="positions__content">
        <div class="positions__top">
          <h3 class="positions__title">Net Open Positions</h3>
          <div class="positions__right">
            <positions-select :placeholder="'Group by counterparty'" :options="options" :selected="selected"
              @onSelect="onSelect" />
            <button class="positions__total">Total planned Equity <span
                class="positions__total--blue">$1080.57</span></button>
            <button class="positions__total">Total Equity <span class="positions__total--blue">$1080.57</span></button>
          </div>
        </div>

        <v-data-table :headers="headers" :items="data" hide-default-footer disable-filtering class="mt-5"
          :mobile-breakpoint="0">
          <template v-slot:item.position="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.position }}
            </p>
          </template>
          <template v-slot:item.sumPosition="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.sumPosition }}
            </p>
          </template>
          <template v-slot:item.plannedPosition="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.plannedPosition }}
            </p>
          </template>
          <template v-slot:item.sumPlannedPosition="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.sumPlannedPosition }}
            </p>
          </template>
          <template v-slot:item.percent="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.percent }}
            </p>
          </template>
          <template v-slot:item.cost="{ item }">
            <p class="mb-0" :class="String(item.position)[0] === '-' ? 'red--text': 'teal--text' ">
              {{ item.cost }}
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

      </div>
    </div>
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
          width: 50,
          sortable: false,
          filterable: false,
          value: 'asset',
        },
        {
          text: 'Position	',
          align: 'end',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'position',
        },
        {
          text: 'Price',
          align: 'end',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'price',
        },
        {
          text: 'Position, $',
          align: 'end',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'sumPosition',
        },

        {
          text: 'Planned Position',
          align: 'end',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'plannedPosition',
        },
        {
          text: 'Volume',
          align: 'end',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'sumPlannedPosition',
        },
        {
          text: 'OR, %',
          align: 'center',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'percent',
        },
        {
          text: 'Est. overnight cost, $	',
          align: 'center',
          width: 100,
          sortable: false,
          filterable: false,
          value: 'cost',
        },
      ],
      data: [
        {
          asset: 'AUD',
          position: -29402.36000000,
          price: 0.63,
          sumPosition: -18523.49,
          plannedPosition: -29402.36000000,
          sumPlannedPosition: -18523.49,
          percent: '-',
          cost: '-'
        },
        {
          asset: 'AUD',
          position: 29402.36000000,
          price: 0.63,
          sumPosition: -18523.49,
          plannedPosition: -29402.36000000,
          sumPlannedPosition: -18523.49,
          percent: '-',
          cost: '-'
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
.positions {
  &__wrap {
    padding-top: 30px;
    background: #FBFBFB;
  }

  &__container {
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__content {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 10px;
    min-height: 600px;
    position: relative;
  }

  &__total {
    background: #F7F7F7;
    border-radius: 4px;
    padding: 7px 10px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    white-space: nowrap;

    &--blue {
      color: #496AFF;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 615px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 465px) {
      flex-direction: column;
      gap: 30px;
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
</style>