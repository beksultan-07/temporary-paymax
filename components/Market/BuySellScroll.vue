<template>
  <div class="buysell_wrap">
    <v-sheet
        class="mx-auto"
        max-width="100%"
    >
      <v-slide-group
          v-model="model"
          class="pa-4"
          center-active
          :show-arrows="false"
      >
        <v-slide-item
            v-for="(button,index) in buttons"
            :key="index"
            v-slot="{ active, toggle }"
        >
            <div class="item" @click="toggle">
              <button class="button" @click="activeButton = activeButton === index ? null : index" :data-col="index" :class="{button_active: activeButton === index}">
                <div class="button__circle"></div>
                <span class="button__text">
                      {{ button.text }}
                    </span>
                <img src="../../static/asset/market/arrows/arrow.svg" alt="arrow" class="arrow">
              </button>
            </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
        {text: 'BTC (AUD)'},
      ],
      model: null,
      activeButton: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.buysell_wrap {
  padding: 30px 0 0 20px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
.item {
  margin-right: 10px;
  padding-bottom: 5px;
}
.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #F7F7F7;
  border-radius: 4px;
  border: 1px solid #F7F7F7;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover {
    border-color: #F48020;
  }

  &__circle {
    background: #171717;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  &__text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #868686;
    width: 71px;
    display: block;
  }
}
.button_active{
  border: 1px solid #F48020;
}
</style>