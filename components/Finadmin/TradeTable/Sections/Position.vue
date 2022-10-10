<template>
  <v-component-table :tableItems="tableItems" :headers="headerline"/>
</template>

<script>
import TableVue from '../Table/Table.vue';

export default {
  name: 'v-component-position',
  components: {
    'v-component-table': TableVue
  },
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
          { text: "№", value: "number", sortable: false },
          { text: "Дата и время", value: "dateAndTime", sortable: false },
          { text: "Тип", value: "type", sortable: false },
          { text: "Счёт", value: "account", sortable: false },
          { text: "Агент", value: "agent", sortable: false },
          { text: "Инструмент", value: "tool", sortable: false },
          { text: "Количество", value: "quantity", sortable: false },
          { text: "Цена", value: "price", sortable: false },
          { text: "Сумма", value: "sum", sortable: false },
          { text: "Валюта", value: "currency", sortable: false },
          { text: "-", value: "line", sortable: false },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>