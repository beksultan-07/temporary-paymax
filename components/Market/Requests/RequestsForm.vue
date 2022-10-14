<template>
  <form class="form" @submit.prevent="submitForm">
    <h3 class="form__title">{{ title }}</h3>
    <div class="form__fields">
        <v-select
            v-model="idValue"
            background-color="#F7F7F7"
            :items="idOptions"
            :label="idLabel"
            outlined
        ></v-select>
        <v-select
            v-model="usdValue"
            background-color="#F7F7F7"
            :items="usdOptions"
            :label="usdLabel"
            outlined
        ></v-select>
        <v-text-field
            v-model="amountValue"
            type="number"
            background-color="#f7f7f7"
            :label="amountLabel"
            outlined
            placeholder="0.00000000"
        ></v-text-field>
      <div class="form__checkbox" v-if="visibleCheckbox">
        <label class="form__checkbox-label" for="checkbox">
          Free Paid by me
        </label>
        <v-checkbox
            id="checkbox"
            color="success"
            value="success"
            hide-details
        ></v-checkbox>
      </div>
      <span class="none" v-else></span>
      <v-textarea
          v-model="areaValue"
          v-if="visibleCheckbox"
          background-color="#f7f7f7"
          outlined
          name="input-7-4"
          :label="areaLabel"
      ></v-textarea>
      <v-text-field
          v-else
          type="number"
          background-color="#f7f7f7"
          :label="netLabel"
          outlined
          placeholder="0.00000000"
      ></v-text-field>
      <button class="form__button form__button--green">{{button}}</button>
    </div>
  </form>
</template>

<script>
export default {
    methods:{
      submitForm(){
        const request = {
          counterParty: this.counterpartyValue,
          asset: this.assetValue,
          amount: this.amountValue,
          area: this.areaValue,
        }

        this.counterpartyValue = '';
        this.assetValue = '';
        this.amountValue = '';
        this.areaValue = '';

        this.requests.push(...request)
      }
    },
    props: {
      visibleCheckbox: Boolean,
      usdOptions: {
        type: Array,
        required: true
      },
      idOptions: {
        type: Array,
        required: true
      },
      title:{
        type: String
      },
      idLabel:{
        type: String
      },
      usdLabel:{
        type: String
      },
      amountLabel:{
        type: String
      },
      areaLabel:{
        type: String
      },
      netLabel:{
        type: String
      },
      button:{
        type: String
      },

      idValue: {
        type: String
      },
      usdValue: {
        type: String
      },
      amountValue: {
        type: String
      },
      areaValue: {
        type: String
      },
      requests: {
        type: Array
      },
    },
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
  &__checkbox {
    background: #f7f7f7;
    border-radius: 4px;
    border: 1px solid rgb(153, 153, 153);
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    &:hover{
      border-color: rgb(35, 35, 35);
    }
    &-label{
      position: absolute;
      top: 12px;
      left: 10px;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #868686;
    }
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
.none{
  display: none;
}
.v-input--selection-controls{
  margin: 0;
  padding: 12px 10px;
}
</style>