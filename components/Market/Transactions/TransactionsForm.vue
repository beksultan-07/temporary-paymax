<template>
  <form class="form" @submit.prevent="submitForm">
    <h3 class="form__title">Create Transaction</h3>
    <div class="form__fields">
      <v-select
          v-model="counterpartyValue"
          background-color="#F7F7F7"
          :items="counterpartyOptions"
          label="Counterparty ID"
          dense
          hide-details
          class="mb-5"
          outlined
      ></v-select>
      <v-select
          v-model="assetValue"
          background-color="#F7F7F7"
          :items="assetOptions"
          label="Asset"
          outlined
          dense
          hide-details
          class="mb-5"
      ></v-select>
      <v-text-field
          v-model="amountValue"
          type="number"
          background-color="#f7f7f7"
          label="Amount"
          outlined
          dense
          hide-details
          class="mb-5"
          placeholder="0.00000000"
      ></v-text-field>
      <div class="form__checkbox">
        <v-checkbox
            label="Free Paid by recipient"
            id="checkbox"
            color="success"
            :value="false"
            hide-details
            dense
            v-model="checkboxValue"
        ></v-checkbox>
      </div>
      <v-textarea
          v-model="areaValue"
          background-color="#f7f7f7"
          outlined
          dense
          hide-details
          class="mb-5"
          name="input-7-4"
          label="Bank reference or transaction hash (opt.)"
      ></v-textarea>
      <button class="form__button form__button--green">Send Assets</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      assetOptions: ['ADA', 'AUD', 'AVAXS', 'BCH','BNB','BNB.BSC','Buzz','Buzz',],
      counterpartyOptions: ['FM-Test-MM (87)'],
      counterpartyValue: '',
      assetValue: '',
      amountValue: '',
      areaValue: '',
      checkboxValue: false,
      date: '',
      time: '',
    }
  },
  methods: {
    submitForm() {
      const transaction = {
        counterParty: this.counterpartyValue,
        asset: this.assetValue,
        amount: this.amountValue,
        freePaid: this.checkboxValue,
        area: this.areaValue,
        date: this.date,
        time: this.time,
      }

      this.counterpartyValue = '';
      this.assetValue = '';
      this.amountValue = '';
      this.areaValue = '';
      this.checkboxValue = false;

      this.$emit('addRequestData', transaction)
    },
    printDate() {
      return new Date().toLocaleDateString();
    },
    printTime() {
      return new Date().toLocaleTimeString();
    },
  },
  mounted() {
    this.date = this.printDate();
    this.time = this.printTime();
  },
  props: {
    transactions: {
      type: Array
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  grid-row: 2 span;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 20px 10px;
  @media (max-width: 900px) {
    grid-row: unset;
  }

  &__title {
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
    margin-bottom: 30px;

    &:hover {
      border-color: rgb(35, 35, 35);
    }

    &-label {
      width: 100%;
      height: 100%;
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

.none {
  display: none;
}

.v-input--selection-controls {
  margin: 0;
  padding: 12px 10px;
}
.v-input--selection-controls{
  margin: 0;
  padding: 12px 10px;
}
.v-input--checkbox::v-deep(.v-input__slot){
  justify-content: space-between;
  flex-direction: row-reverse;
}
.v-input--checkbox::v-deep(.v-label){
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #868686;
}
</style>