<template>
  <div class="requests__wrap">
    <div class="requests__container">
      <div class="requests__content">
        <transactions-form @addRequestData="addRequestData"/>
        <your-transactions :transactions="transactions"/>
        <transactions-to-you/>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionsForm from "@/components/Market/Transactions/TransactionsForm";
import YourTransactions from "@/components/Market/Transactions/YourTransactions";
import TransactionsToYou from "@/components/Market/Transactions/TransactionsToYou";
export default {
  components: {TransactionsToYou, YourTransactions, TransactionsForm},
  data(){
    return{
      assetOptions: ['ADA', 'AUD', 'AVAXS', 'BCH','BNB','BNB.BSC','Buzz','Buzz',],
      counterpartyOptions: ['FM-Test-MM (87)'],
      counterpartyValue: '',
      assetValue: '',
      amountValue: '',
      areaValue: '',
      freeValue: false,
      transactions: [],
    }
  },
  methods:{
    addRequestData(data){
      this.transactions.push(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.requests{
  &__wrap{
    min-height: 100vh;
    padding-top: 30px;
    background: #FBFBFB;
  }
  &__container{
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1400px;
  }
  &__content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 900px) {
      gap: 0;
      row-gap: 20px;
      grid-template-columns: repeat(1,1fr);
    }
  }
}
</style>