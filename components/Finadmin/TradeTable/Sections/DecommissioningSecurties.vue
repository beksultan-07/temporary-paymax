<template>
  <v-component-table :tableItems="tableItems" :headers="headerline" />
</template>

<script>
import TableVue from '../Table/Table.vue';

export default {
  name: 'v-component-decommissioning-securties',
  components: {
    'v-component-table': TableVue
  },
  data: () => ({
    tableItems: [
      {
        number: 10054,
        dateAndTime: "04.08.2022 16:36:53",
        agent: "ОАО 'Группа К51'",
        tool: "КМОТ",
        grounds: "Договор №43 от 28.01.2022 ",
        sum: 123214,
      },
    ]
  }),
  computed: {
    headerline() {
      return {
        top: [
          { text: "№", value: "number", sortable: false },
          { text: "Дата и время", value: "dateAndTime", sortable: false },
          { text: "Инструмент", value: "tool", sortable: false },
          { text: "Агент", value: "agent", sortable: false },
          { text: "Основание", value: "grounds", sortable: false },
          { text: "Сумма", value: "sum", sortable: false },
          { text: "", value: "confirmation", sortable: false },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>