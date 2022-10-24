<template>
  <div class="form__wrap">
    <h2 class="form__title">Company Data</h2>
    <form class="form">
      <v-text-field
          label="Company name"
          placeholder="envoys vision"
          outlined
          dense
          hide-details
          class="mb-5"
          background-color="#F7F7F7"
      ></v-text-field>
      <v-text-field
          label="Registration number"
          placeholder="56789000"
          outlined
          dense
          hide-details
          class="mb-5"
          background-color="#F7F7F7"
          type="number"
      ></v-text-field>
      <v-text-field
          label="Legal address"
          placeholder="Togolok Moldo 29"
          outlined
          dense
          hide-details
          class="mb-5"
          background-color="#F7F7F7"
      ></v-text-field>
      <div class="form__cols">
        <v-text-field
            label="City"
            placeholder="City"
            outlined
            dense
            hide-details
            class="mb-5"
            background-color="#F7F7F7"
        ></v-text-field>
        <v-text-field
            label="ZIP Code"
            placeholder="123456"
            outlined
            dense
            hide-details
            class="mb-5"
            type="number"
            background-color="#F7F7F7"
        ></v-text-field>
      </div>
      <v-text-field
          label="Country"
          placeholder="Wakanda"
          outlined
          dense
          hide-details
          class="mb-5"
          background-color="#F7F7F7"
      ></v-text-field>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .form{
    &__title{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #171717;
      margin-bottom: 20px;
    }
    &__cols{
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 0;
      }
    }
  }
</style>