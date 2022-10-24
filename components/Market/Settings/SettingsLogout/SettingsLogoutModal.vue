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
          <p class="modal__desc">Are you sure you want to logout?</p>
          <button class="modal__btn">Logout</button>
          <button
              class="modal__btn-cancel"
              @click="$emit('close-modal')"
          >
            Cancel
          </button>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    activeModal: {
      type: Boolean
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &__wrap {
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-in-out;

    &_active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__content {
    padding: 20px;
  }

  &__title {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #171717;
    margin-bottom: 20px;
  }

  &__desc {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #868686;
    max-width: 320px;
    margin: 10px 0 20px 0;
  }

  &__btn {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #FF5656;
    width: 100%;
    padding: 9px 10px;
    border: 1px solid #FF5656;
    border-radius: 4px;
    transition: .3s ease-in-out;

    &:hover {
      background: #FF5656;
      color: #fff;
    }

    &-cancel {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #868686;
      margin: 10px 0 0 0;
    }
  }
}
</style>