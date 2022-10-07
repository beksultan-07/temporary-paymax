<template>
  <v-data-table
    class="table"
    hide-default-footer
    disable-pagination
    disable-filtering
    fixed-header
    :height="tableItems.length > 10 ? '500px' : 'auto'"
    :headers="headers.top"
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
    <template v-slot:[`item.reasonForRejection`]>
      <v-btn x-small class="green darken-1 white--text text--white mb-1">Подтвердить</v-btn> <!--  Кнопка подтверждения (Депонирование ЦБ)  -->
      <!-- <v-btn x-small class="red darken-1 white--text text--white">Отказ</v-btn> --> <!--  Кнопка отказа (Депонирование ЦБ)  -->
    </template>
    <template v-slot:[`item.confirmation`]>
      <div class="d-flex aling-center">
        <v-btn x-small color="primary" class="mr-2">Открыть</v-btn>
        <v-btn x-small class="green darken-1 white--text text--white mb-1 mr-2">Подтвердить</v-btn>
        <v-btn x-small class="red darken-1 white--text text--white">Отмена</v-btn>
      </div>
    </template>  
  </v-data-table>
</template>

<script>
  export default {
    name: 'v-component-table',
    props: {
      tableItems: {
        type: Array,
        required: false
      },
      headers: {
        type: Object,
        required: true
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