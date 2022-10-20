<template>
  <div class="modal__wrap" :class="{modal__wrap_active: activeModal}">
    <v-dialog
        width="255"
        :value="activeModal"
        @click:outside="$emit('close-modal')"
    >
      <template v-slot:activator="{ on, attrs }">
      </template>
      <v-card>
        <div class="modal__content">
          <h3 class="modal__title">Change password</h3>
          <form class="modal__form" @submit.prevent="submitHandler">
            <v-text-field
                v-model="currentPass"
                background-color="#F7F7F7"
                label="Current password"
                placeholder="************"
                outlined
                dense
                hide-details
                class="mb-5"
                type="password"
            ></v-text-field>
            <v-text-field
                v-model="newPass"
                background-color="#F7F7F7"
                label="New password"
                placeholder="************"
                outlined
                dense
                hide-details
                class="mb-5"
                type="password"
            ></v-text-field>
            <v-text-field
                v-model="repeatPass"
                background-color="#F7F7F7"
                label="Repeat password"
                placeholder="************"
                outlined
                dense
                hide-details
                class="mb-5"
                type="password"
            ></v-text-field>
            <button class="modal__btn">Submit</button>
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPass: '',
      newPass: '',
      repeatPass: '',
    }
  },
  props:{
    activeModal: {
      type: Boolean
    },
  },
  methods:{
    submitHandler(){
      this.$emit('submit-form')
      this.currentPass = ''
      this.newPass = ''
      this.repeatPass = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  &__wrap{
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-in-out;
    &_active{
      opacity: 1;
      visibility: visible;
    }
  }
  &__content{
    padding: 20px;
  }
  &__title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #171717;
    margin-bottom: 20px;
  }
  &__desc{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #868686;
    max-width: 320px;
    margin: 10px 0 20px 0;
  }
  &__btn{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #F48020;
    width: 100%;
    padding: 9px 10px;
    border: 1px solid #F48020;
    border-radius: 4px;
    transition: .3s ease-in-out;
    &:hover{
      background: #F48020;
      color: #fff;
    }
  }
}
</style>