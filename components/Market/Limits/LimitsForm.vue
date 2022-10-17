<template>
  <form class="form">
    <h3 class="form__title">Set Counterparty Limits</h3>
    <div class="form__fields">
      <v-text-field
          type="number"
          background-color="#f7f7f7"
          label="Counterparty ID"
          outlined
          placeholder="0"
      ></v-text-field>
      <v-select
          background-color="#F7F7F7"
          :items="currencyOptions"
          label="Currency USD"
          outlined
      ></v-select>
      <v-text-field
          type="number"
          background-color="#f7f7f7"
          label="Gross Limit"
          outlined
          placeholder="0.00000000"
      ></v-text-field>
      <v-text-field
          type="number"
          background-color="#f7f7f7"
          label="Net Limit"
          outlined
          placeholder="0.00000000"
      ></v-text-field>
      <button class="form__button form__button--green">Set Limits</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      currencyOptions: ['ADA', 'AUD', 'AVAXS', 'BCH','BNB','BNB.BSC','Buzz','Buzz',],
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  grid-row: 2 span;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 20px 10px;
  @media (max-width: 900px) {
    grid-row: unset;
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 30px;
  }
  &__button {
    outline: none;
    padding: 9px 10px;
    width: 100%;
    transition: .3s ease-in-out;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #4AD2AA;
    border: 1px solid #4AD2AA;
    border-radius: 4px;

    &:hover {
      color: #fff;
      background: #4AD2AA;
    }
  }
}
.v-input--selection-controls{
  margin: 0;
  padding: 12px 10px;
}
</style>