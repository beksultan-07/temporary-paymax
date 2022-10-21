<template>
  <div class="settings__wrap">
    <div class="settings__container">
      <div class="settings__content">
        <h1 class="settings__title">Settings</h1>
        <div class="scroll">
          <div class="settings__links">
            <div
                class="settings__link"
                :class="{settings__link_active: currentComponent === link.component}"
                v-for="(link, index) in links"
                :key="index"
                @click="currentComponent = link.component"
            >
              {{link.text}}
            </div>
            <button class="settings__logout settings__link" @click="activeModal = !activeModal">Logout</button>
          </div>
        </div>
        <component
            :is="renderComponent"
            v-bind:currentComponent="currentComponent"
        ></component>
      </div>
    </div>
    <settings-logout-modal :active-modal="activeModal" @close-modal="closeModal"/>
  </div>
</template>

<script>
import SettingsReferrals from "@/components/Market/Settings/SettingsReferrals/SettingsReferrals";
import SettingsLogin from "@/components/Market/Settings/SettingsLogin/SettingsLogin";
import SettingsNotification from "@/components/Market/Settings/SettingsNotification/SettingsNotification";
import SettingsLogoutModal from "@/components/Market/Settings/SettingsLogout/SettingsLogoutModal";
import SettingsAccount from "@/components/Market/Settings/SettingsAccount/SettingsAccount";
export default {
  components: {
    'v-component-referrals': SettingsReferrals,
    'v-component-login': SettingsLogin,
    'v-component-notification': SettingsNotification,
    'v-component-account': SettingsAccount,
    SettingsLogoutModal
  },
  data(){
    return{
      currentComponent: 'Account',
      links: [
        {text: 'Account data', component: 'Account'},
        {text: 'Referrals', component: 'Referrals'},
        {text: 'Login and Security', component: 'Login'},
        {text: 'Notification', component: 'Notification'},
      ],
      activeModal: false,
    }
  },
  methods:{
    closeModal(){
      this.activeModal = false
    },
  },
  computed: {
    renderComponent() {
      return 'v-component-' + this.currentComponent.toLowerCase();
    }
  }
}
</script>

<style lang="scss" scoped>
.settings{
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
    max-width: 680px;
    min-height: 470px;
    padding: 20px 70px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 720px) {
      padding: 10px;
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
  &__links{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 30px auto;
    width: 540px;
    overflow-x: auto;
  }
  &__link{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover{
      text-shadow: 0 0 .65px #F48020, 0 0 .65px #F48020;
      color: #F48020;
    }
    &_active{
      text-shadow: 0 0 .65px #F48020, 0 0 .65px #F48020;
      color: #F48020;
    }
  }
}
.scroll{
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
}
</style>