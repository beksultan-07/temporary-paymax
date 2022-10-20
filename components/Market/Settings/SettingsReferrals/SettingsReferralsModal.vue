<template>
  <div class="modal__wrap" :class="{modal__wrap_active: activeModal}">
    <v-dialog
        width="445"
        :value="activeModal"
        @click:outside="$emit('close-modal')"
    >
      <template v-slot:activator="{ on, attrs }">
      </template>
      <v-card>
        <div class="modal__content">
          <h3 class="modal__title">Invite New Taker</h3>
          <p class="modal__desc">The invitation links in the mails will be available 24 hours, the ability to resend the expired link — the next 14 days.</p>
          <form class="modal__form" @submit.prevent="submitHandler">
            <v-text-field
                v-model="nameValue"
                background-color="#F7F7F7"
                label="Taker's Name (optional)"
                placeholder="Beksuluu Esenova"
                outlined
                dense
                hide-details
                class="mb-5"
            ></v-text-field>
            <v-text-field
                v-model="emailValue"
                background-color="#F7F7F7"
                label="Email"
                placeholder="beksuluuesenova@gmail.com"
                outlined
                dense
                hide-details
                type="email"
                class="mb-5"
            ></v-text-field>
            <button class="modal__btn">Send Invitation</button>
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
      nameValue: '',
      emailValue: '',
    }
  },
  props:{
    activeModal: {
      type: Boolean
    }
  },
  methods:{
    submitHandler(){
      const taker = {
        name: this.nameValue,
        email: this.emailValue,
      }
      this.$emit('submit-form', taker)
      this.nameValue = ''
      this.emailValue = ''
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