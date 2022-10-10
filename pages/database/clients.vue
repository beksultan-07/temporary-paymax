<template>
  <v-container style="max-width: 1640px;">
    <v-card outlined>
      <v-row no-gutters>

        <v-col cols="3">
          SideBar
        </v-col>

        <v-col cols="9">
          <v-database-table/>
        </v-col>
      
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import DatabaseTableVue from '../../components/Database/DatabaseTable/DatabaseTable.vue';

  export default {
    auth: false,

    components:{
      'v-database-table': DatabaseTableVue
    }
  }
</script>

<style lang="scss" scoped>

</style>