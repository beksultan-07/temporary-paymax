<template>
  <div class="referrals">
    <div class="referrals__content">
      <div class="referrals__top">
        <h3 class="referrals__title">Invited taked list</h3>
        <button class="referrals__btn" @click="activeModal = !activeModal">Invite takers</button>
      </div>
      <div class="referrals__desc">
        You can invite Takers directly from Finery Markets. We show invitations below so that you can manage them and check their data.
      </div>
    </div>
    <div class="referrals__data" v-if="takers.length <= 0">No data yet</div>
    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              CP ID
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="(taker, index) in takers"
              :key="index"
          >
            <td class="text-left">{{ taker.email }}</td>
            <td class="text-left">—</td>
            <td class="text-left">Sent</td>
            <td class="text-left">{{ date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <settings-referrals-modal
        :active-modal="activeModal"
        @close-modal="closeModal"
        @submit-form="submitForm"
    />
  </div>
</template>

<script>
import SettingsReferralsModal from "@/components/Market/Settings/SettingsReferrals/SettingsReferralsModal";
export default {
  name: 'v-component-referrals',
  components: {SettingsReferralsModal},
  data(){
    return{
      activeModal: false,
      nameValue: '',
      emailValue: '',
      date: '',
      takers: [],
    }
  },
  methods:{
    closeModal(){
      this.activeModal = false
    },
    submitForm(taker){
      this.takers.push(taker)
      this.activeModal = false
    },
    printDate() {
      return new Date().toLocaleDateString();
    },
  },
  mounted() {
    this.date = this.printDate();
  }
}
</script>

<style lang="scss" scoped>
  .referrals{
    &__content{
      padding-bottom: 10px;
      border-bottom: 1px solid #EAEAEA;
      margin-bottom: 20px;
    }
    &__top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    &__title{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #868686;
    }
    &__btn{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
      padding: 6px 10px;
      background: #FBFBFB;
      border-radius: 4px;
    }
    &__desc{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #868686;
      max-width: 385px;
      margin: 0;
    }
    &__data{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #868686;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>