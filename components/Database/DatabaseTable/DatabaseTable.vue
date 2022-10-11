<template>
    <v-tabs>
        <v-tab href="tab-individuals" @click.prevent>
            Физические лица
        </v-tab>
        <v-tab href="tab-legalEntities" @click.prevent>
            Юридические лица
        </v-tab>

        <v-text-field
            solo
            label="Поиск"
            append-icon="mdi-magnify"
            :full-width="false"
            flat
            class="input"
          ></v-text-field>

        <v-tab-item value="tab-individuals">
            <v-container>Физические лица</v-container>
        </v-tab-item>

        <v-tab-item value="tab-legalEntities">
            <v-container>Юридические лица</v-container>
        </v-tab-item>

  </v-tabs>
</template>

<script>
    export default {
        name: 'v-database-table'
    }
</script>

<style lang="scss" scoped>
    .input{
        max-width: 300px;
        margin: 0 0 0 auto;
    }
</style>