<template>
  <v-layout fill-height wrap>
    <v-flex/>
    <v-flex mx5 sm6 md4 align-self-center>
      <v-sheet rounded="xl" max-width="500" class="mx-auto text-center pa-5">
        <h1 v-if="error.statusCode === 404">
          {{ this.$vuetify.lang.t('$vuetify.lang_70') }}
        </h1>
        <h1 v-else>
          {{ this.$vuetify.lang.t('$vuetify.lang_71') }}
        </h1>
        <v-divider class="my-4" />
        <v-alert text prominent type="error" icon="mdi-cloud-alert">
          {{ error.message }}
        </v-alert>
        {{ $vuetify.lang.t('$vuetify.lang_72') }}
      </v-sheet>
    </v-flex>
    <v-flex/>
  </v-layout>
</template>

<script>

  export default {
    layout: 'mono',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    head () {
      return {
        title: this.error.statusCode === 404 ? this.$vuetify.lang.t('$vuetify.lang_70') : this.$vuetify.lang.t('$vuetify.lang_71')
      }
    }
  }

</script>
