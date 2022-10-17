<template>
  <div class="requests__wrap">
    <div class="requests__container">
      <div class="requests__content">
        <requests-form
            title="Create Request"
            :usd-options="assetOptions"
            :id-options="counterpartyOptions"
            id-label="Counterparty ID"
            usd-label="Asset USD"
            amount-label="Amount (opt.)"
            net-label="Net Limit"
            area-label="Protocol, memo or Tag (opt.)"
            button="Set Limits"
            :visible-checkbox="true"
            :idValue="counterpartyValue"
            :usdValue="assetValue"
            :amountValue="amountValue"
            :areaValue="areaValue"
            :free-value="freeValue"
            :requests="requests"
            @addRequestData="addRequestData"
        />
        <your-requests :requests="requests"/>
        <requests-to-you/>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsForm from "@/components/Market/Requests/RequestsForm";
import YourRequests from "@/components/Market/Requests/YourRequests";
import RequestsToYou from "@/components/Market/Requests/RequestsToYou";
export default {
  components: {RequestsToYou, YourRequests, RequestsForm},
  data(){
    return{
      assetOptions: ['ADA', 'AUD', 'AVAXS', 'BCH','BNB','BNB.BSC','Buzz','Buzz',],
      counterpartyOptions: ['FM-Test-MM (87)'],
      counterpartyValue: '',
      assetValue: '',
      amountValue: '',
      areaValue: '',
      freeValue: false,
      requests: [],
    }
  },
  methods:{
    addRequestData(data){
      console.log(data)
      this.requests.push(data)
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