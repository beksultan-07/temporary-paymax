<template>
  <div class="your__wrap">
    <h3 class="your__title">Your Requests</h3>
    <span class="your__data" v-if="requests.length <= 0">No data yet</span>
    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            CP ID
          </th>
          <th class="text-left">
            Asset
          </th>
          <th class="text-left">
            Amount
          </th>
          <th class="text-left">
            Fee payer
          </th>
          <th class="text-left">
            Comment
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(request, index) in requests"
            :key="index"
        >
          <td class="text-left">{{ request.counterParty }}</td>
          <td class="text-left">{{ request.asset }}</td>
          <td class="text-left">{{ request.amount }}</td>
          <td class="text-left" v-if="request.freePaid === true">Sender</td>
          <td class="text-left" v-else>Not the sender</td>
          <td class="text-left">{{ request.area }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props:{
    requests: {
      type: Array
    }
  },
  watch:{
    requests(){
      console.log(this.requests)
    }
  }
}
</script>

<style lang="scss" scoped>
.your{
  &__wrap{
    grid-column: 2 span;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    min-height: 230px;
    @media (max-width: 900px) {
      grid-column: unset;
    }
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 30px;
  }
  &__data{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__table{
    width: 100%;
  }
  &__name{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
}
.list{
  padding: 0;
  list-style: none;
  &__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #EAEAEA;
    &-text{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
    }
  }
}
</style>