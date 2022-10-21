<template>
  <div class="account__wrap">
    <settings-account-info/>
    <settings-account-form/>
    <settings-account-legal/>
    <button class="account__btn">Change</button>
  </div>
</template>

<script>
import SettingsAccountInfo from "@/components/Market/Settings/SettingsAccount/SettingsAccountInfo";
import SettingsAccountForm from "@/components/Market/Settings/SettingsAccount/SettingsAccountForm";
import SettingsAccountLegal from "@/components/Market/Settings/SettingsAccount/SettingsAccountLegal";
export default {
  name: 'v-component-account',
  components: {SettingsAccountLegal, SettingsAccountForm, SettingsAccountInfo}
}
</script>

<style lang="scss" scoped>
.account{
  &__btn{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 9px 70px;
    color: #F48020;
    border-radius: 4px;
    border: 1px solid #F48020;
    margin: 30px 0 0 auto;
    display: block;
    transition: .3s ease-in-out;
    &:hover{
      background: #F48020;
      color: #fff;
    }
    @media(max-width: 425px){
      width: 100%;
    }
  }
}
</style>