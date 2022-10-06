<template>
  <v-data-table
    class="table"
    hide-default-footer
    disable-pagination
    disable-filtering
    fixed-header
    :height="tableItems.length > 10 ? '500px' : 'auto'"
    :headers="headerline.top"
    :items="tableItems"
  >
    <template v-slot:[`item.tool`]="{ item }">
      <div class="light-blue--text text--lighten-2">{{item.tool}}</div>
    </template>
    <template v-slot:[`item.quantity`]="{ item }">
      <div class="green--text text--lighten-3">{{item.quantity}}</div>
    </template>
    <template v-slot:[`item.price`]="{ item }">
      <div class="green--text text--lighten-3">{{item.price}}</div>
    </template>
    <template v-slot:[`item.sum`]="{ item }">
      <div class="green--text text--lighten-3">{{item.sum}}</div>
    </template>
    <template v-slot:[`item.line`]>
      <div class="green--text text--lighten-3"><img src="/asset/table-icons/galochka.svg" alt="galochka"></div>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'v-component-table',
    data: () => ({
      tableItems: [
        {
          number: 10054,
          dateAndTime: "04.08.2022 16:36:53",
          type: "Регистрационная на покупку",
          account: "3-3101-10043",
          agent: "ОАО 'Группа К51'",
          tool: "КМОТ",
          quantity: "122",
          price: "2,512",
          sum: "2,512",
          currency: "KGS",
          line: "-",
        },
        {
          number: 10054,
          dateAndTime: "04.08.2022 16:36:53",
          type: "Регистрационная на покупку",
          account: "3-3101-10043",
          agent: "ОАО 'Группа К51'",
          tool: "КМОТ",
          quantity: "122",
          price: "2,512",
          sum: "2,512",
          currency: "KGS",
          line: "-",
        },
      ]
    }),
    computed: {
      headerline() {
        return {
          top: [
            { text: "№", value: "number", sortable: false},
            { text: "Дата и время", value: "dateAndTime", sortable: false},
            { text: "Тип", value: "type", sortable: false},
            { text: "Счёт", value: "account", sortable: false},
            { text: "Агент", value: "agent", sortable: false},
            { text: "Инструмент", value: "tool", sortable: false},
            { text: "Количество", value: "quantity", sortable: false},
            { text: "Цена", value: "price", sortable: false},
            { text: "Сумма", value: "sum", sortable: false},
            { text: "Валюта", value: "currency", sortable: false},
            { text: "-", value: "line", sortable: false},
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-data-table__wrapper {
  &::-webkit-scrollbar {
    width: 8px!important;
  }

  &::-webkit-scrollbar-track {
    background-color: #F2F2F2!important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9C9C9C!important;
    border-radius: 10px;
  }
}

.color-green {
  color: #4AD2AA;
}
.color-blue {
  color: #4478BB;
}
</style>