<template>
  <div class="login__wrap">
    <div class="login__content">
      <h3 class="login__title">Password</h3>
      <button class="login__btn" @click="activeModal = !activeModal">Change password</button>
    </div>
    <settings-login-modal :active-modal="activeModal" @close-modal="closeModal" @submit-form="submitForm"/>
  </div>
</template>

<script>
import SettingsLoginModal from "@/components/Market/Settings/SettingsLogin/SettingsLoginModal";
export default {
  name: 'v-component-login',
  components: {SettingsLoginModal},
  data(){
    return{
      activeModal: false
    }
  },
  methods: {
    closeModal() {
      this.activeModal = false
    },
    submitForm(){
      this.activeModal = false
    },
  }
}
</script>

<style lang="scss" scoped>
.login{
  &__wrap{}
  &__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #EAEAEA;
    padding-bottom: 10px;
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
}
</style>