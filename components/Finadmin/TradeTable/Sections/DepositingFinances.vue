<template>
  <v-component-table :tableItems="tableItems" :headers="headerline" />
</template>

<script>
import TableVue from '../Table/Table.vue';

export default {
  name: 'v-component-depositing-finances',
  components: {
    'v-component-table': TableVue
  },
  data: () => ({
    tableItems: [
      {
        number: 10054,
        dateAndTime: "04.08.2022 16:36:53",
        account: "3-3101-10043",
        agent: "ОАО 'Группа К51'",
        tool: "КМОТ",
        amount: "122",
        grounds: "Договор № 87 от 22.08.2022",
        result: "Заявка на депонирование",
        reasonForRejection: "Подтвердить",
      },
    ]
  }),
  computed: {
    headerline() {
      return {
        top: [
          { text: "№", value: "number", sortable: false },
          { text: "Дата и время", value: "dateAndTime", sortable: false },
          { text: "Счёт", value: "account", sortable: false },
          { text: "Агент", value: "agent", sortable: false },
          { text: "Инструмент", value: "tool", sortable: false },
          { text: "Объём", value: "amount", sortable: false },
          { text: "Основание", value: "grounds", sortable: false },
          { text: "Результат", value: "result", sortable: false },
          { text: "Причина отказа", value: "reasonForRejection", sortable: false,},
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>