<template>
  <div class="notification__wrap">
    <div class="notification__checkbox" v-for="checkbox in checkboxes" :key="checkbox.id">
      <v-checkbox
          :label="checkbox.label"
          id="checkbox"
          color="success"
          :value="checkbox"
          hide-details
          v-model="model"
          :value-comparator="comparator"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-component-notification",
  data(){
    return{
      model: [],
      checkboxes: [
        {label: 'Trade id done', id: 1},
        {label: 'Settlement request is received', id: 2},
        {label: 'Settlement transaction is received', id: 3},
        {label: 'Settlement transaction is committed', id: 4},
      ]
    }
  },
  methods:{
    comparator(a, b) {
      return a.id === b.id;
    },
  }
}
</script>

<style lang="scss" scoped>
.notification{
  &__wrap{}
  &__checkbox {
    background: #f7f7f7;
    border-radius: 4px;
    margin-bottom: 30px;
    position: relative;
  }
}
.v-input--selection-controls{
  margin: 0;
  padding: 12px 10px;
}
.v-input--checkbox::v-deep(.v-input__slot){
  justify-content: space-between;
  flex-direction: row-reverse;
  &:hover .v-label{
    color: #171717;
  }
}
.v-input--checkbox::v-deep(.v-label){
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #868686;
  transition: .3s ease-in-out;
}
.v-input--is-label-active::v-deep(.v-label){
  color: #171717;
}
</style>