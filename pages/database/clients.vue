<template>
  <v-container style="max-width: 1640px;">
    <v-card outlined>
      <v-row no-gutters>
        <v-col cols="3" class="pl-10 pt-7 pr-5 pb-10">
          <v-card-title class="text-body-1 font-weight-bold pa-0 mb-10">Клиенты</v-card-title>
          <v-sidebar-form/>
        </v-col>
        <v-col cols="9">
          Main
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import FormVue from '../../components/Database/SideBar/Clients/Form.vue'

  export default {
    auth: false,
    components: {
      'v-sidebar-form': FormVue
    }
  }
</script>

<style lang="scss" scoped>

</style>