<template>
    <v-form>
      <v-container>
        <v-text-field
          solo
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
          @input="$emit('input', $event)"
          :value="value"
        ></v-text-field>
      </v-container>
    </v-form>
</template>

<script>
    export default {
        name: "v-tool-input",
        props: ['value'],
    }
</script>

<style lang="scss" scoped>

</style>