<template>
  <div class="your__wrap">
    <h3 class="your__title">Your Transactions</h3>
    <span class="your__data" v-if="transactions.length <= 0">No data yet</span>
    <div class="scroll" v-else>
      <div class="your__table">

        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left" v-for="(item, index) in tableHead" :key="index">
                {{ item.name }}
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(transaction, index) in transactions"
                :key="index"
            >
              <td class="text-left" v-if="transaction.counterParty.length > 0">
                {{ transaction.counterParty }}
              </td>
              <td class="text-left" v-else>—</td>
              <td class="text-left" v-if="transaction.asset.length > 0">
                {{ transaction.asset }}
              </td>
              <td class="text-left" v-else>—</td>
              <td class="text-left" v-if="transaction.amount.length > 0">
                {{ transaction.amount }}
              </td>
              <td class="text-left" v-else>—</td>
              <td class="text-left" v-if="transaction.freePaid === true">
                Sender
              </td>
              <td class="text-left" v-else>
                Not the sender
              </td>
              <td class="text-left" v-if="transaction.area.length > 0">
                {{ transaction.area }}
              </td>
              <td class="text-center" v-else>—</td>
              <td class="text-left">{{transaction.date}} {{transaction.time}}</td>
              <div class="remove">×</div>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHead: [
        {name: 'CP ID'},
        {name: 'Asset'},
        {name: 'Amount'},
        {name: 'Fee payer'},
        {name: 'Comment'},
        {name: 'Time'},
      ]
    }
  },
  props: {
    transactions: {
      type: Array
    }
  },
}
</script>

<style lang="scss" scoped>
.remove{
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1F1F1;
  color: #868686;
  margin: 16px 0 0 0;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover{
    background: #FF5656;
    color: #fff;
  }
}
.your {
  &__wrap {
    grid-column: 2 span;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px 10px;
    position: relative;
    min-height: 230px;
    overflow: hidden;
    @media (max-width: 900px) {
      grid-column: unset;
    }
  }
  &__table{
    width: 880px;
  }
  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #171717;
    margin-bottom: 30px;
  }
  &__data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__name {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
  }
}

.list {
  padding: 0;
  list-style: none;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #EAEAEA;

    &-text {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
    }
  }
}
.scroll{
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: #9C9C9C;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
  }
  &::-webkit-scrollbar-track{
    background: #F2F2F2;
    border-radius: 10px;
  }
}
</style>