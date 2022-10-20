<template>
  <div class="modal__wrap" :class="{modal__wrap_active: activeModal}">
    <v-dialog
        width="345"
        :value="activeModal"
        @click:outside="$emit('close-modal')"
    >
      <template v-slot:activator="{ on, attrs }">
      </template>
      <v-card>
        <div class="modal__content">
          <h3 class="modal__title">Download .CSV</h3>
          <form class="modal__form">
            <v-text-field
                background-color="#F7F7F7"
                label="From date"
                outlined
                dense
                hide-details
                class="mb-5"
                type="date"
            ></v-text-field>
            <v-text-field
                background-color="#F7F7F7"
                label="To date"
                outlined
                dense
                hide-details
                type="date"
                class="mb-5"
            ></v-text-field>
            <v-text-field
                v-model="fileNameVal"
                background-color="#F7F7F7"
                label="Filename"
                outlined
                dense
                hide-details
                class="mb-5"
            ></v-text-field>
            <div class="modal__checkbox">
              <v-checkbox
                  label="Include headers"
                  id="checkbox"
                  color="success"
                  value="success"
                  hide-details
                  dence
                  class="mb-5"
              ></v-checkbox>
            </div>
            <button class="modal__btn">Download</button>
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
      fileNameVal: '',
    }
  },
  props:{
    activeModal: {
      type: Boolean
    }
  },
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
  &__checkbox {
    background: #f7f7f7;
    border-radius: 4px;
    margin-bottom: 30px;
    position: relative;
  }
  &__btn{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #4AD2AA;
    width: 100%;
    padding: 9px 10px;
    border: 1px solid #4AD2AA;
    border-radius: 4px;
    transition: .3s ease-in-out;
    &:hover{
      background: #4AD2AA;
      color: #fff;
    }
  }
}
.v-input--selection-controls{
  margin: 0;
  padding: 12px 10px;
}
.v-input--checkbox::v-deep(.v-input__slot){
  justify-content: space-between;
  flex-direction: row-reverse;
  &:hover .v-label{
    color: #171717;
  }
}
.v-input--checkbox::v-deep(.v-label){
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #868686;
  transition: .3s ease-in-out;
}
.v-input--is-label-active::v-deep(.v-label){
  color: #171717;
}
</style>