<template>
  <v-form>
    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="ФИО" 
    solo
    :error="false" 
    placeholder="ФИО" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>

    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Логин" 
    solo
    :error="false" 
    placeholder="Логин" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>

    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Пароль" 
    solo
    :error="false" 
    placeholder="Пароль" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>

    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="ИИН Паспорта" 
    solo
    :error="false" 
    placeholder="ИИН Паспорта" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>

    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Паспорт" 
    solo
    :error="false" 
    placeholder="Паспорт" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>
    
    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Орган выдавший паспорт" 
    solo
    :error="false" 
    placeholder="Орган выдавший паспорт" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>
    
    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="22.09.2022" 
    solo
    :error="false" 
    placeholder="22.09.2022" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>
    
    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Адрес" 
    solo
    :error="false" 
    placeholder="Адрес" 
    height="10" 
    hide-details
    class="mb-4"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>
    
    <v-text-field 
    :background-color="$vuetify.theme.dark ? '#1e1e1e' : '#f9f9f9'" 
    dense 
    label="Telegram" 
    solo
    :error="false" 
    placeholder="Telegram" 
    height="10" 
    hide-details
    class="mb-5"
    :flat="$vuetify.theme.dark ? false : true"

    ></v-text-field>

    <v-component-file-input/>

    <v-btn
      color="#F48020"
      class="white--text font-weight-bold text-caption mt-7"
      block
    >Добавить</v-btn>
  </v-form>
</template>

<script>
import FileInputVue from '../FileInput.vue'

export default {
  name: 'v-sidebar-client-form',
  components: {
    'v-component-file-input': FileInputVue
  }
}
</script>

<style lang="scss" scoped>

</style>