<template>
  <form class="form" @submit.prevent="submitForm">
    <h3 class="form__title">Create Request</h3>
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
          label="Asset USD"
          outlined
          dense
          hide-details
          class="mb-5"
      ></v-select>
      <v-text-field
          v-model="amountValue"
          type="number"
          background-color="#f7f7f7"
          label="Amount (opt.)"
          outlined
          dense
          hide-details
          class="mb-5"
          placeholder="0.00000000"
      ></v-text-field>
      <div class="form__checkbox">
        <label class="form__checkbox-label" @click="freeValue = !freeValue" for="checkbox">
          Free Paid by me
        </label>
        <v-checkbox
            id="checkbox"
            color="success"
            value="success"
            hide-details
            dense
            :aria-checked="freeValue"
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
          label="Protocol, memo or Tag (opt.)"
      ></v-textarea>
      <button class="form__button form__button--green">Set Limits</button>
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
      freeValue: false,
    }
  },
  methods: {
    submitForm() {
      const request = {
        counterParty: this.counterpartyValue,
        asset: this.assetValue,
        amount: this.amountValue,
        freePaid: this.freeValue,
        area: this.areaValue,
      }

      this.counterpartyValue = '';
      this.assetValue = '';
      this.amountValue = '';
      this.areaValue = '';
      this.freeValue = false;

      this.$emit('addRequestData', request)
    }
  },
  props: {
    requests: {
      type: Array
    },
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
    position: relative;
    display: flex;
    justify-content: flex-end;
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
</style>