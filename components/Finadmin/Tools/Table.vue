<template>
  <v-tabs>
      <v-tab
        v-for="(el, idx) in tabs"
        :key="idx"
        :href="`#tab-${el.link}`"
        @click="$emit('changeTab', el.link)"
      >
        {{el.name}}
      </v-tab>

      <v-tab-item
        v-for="(el, idx) in tabs"
        :key="idx"
        :value="`tab-${el.link}`"
      >
        <v-simple-table height="350" class="table" fixed-header>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Инструмент
                  </th>
                  <th class="text-left">
                    Описание
                  </th>
                  <th class="text-right">
                    <v-btn 
                      @click="$emit('countrySwitcher')" 
                      elevation="0" 
                      class="amber lighten-3 amber--text text--darken-4" 
                      small
                    >
                      Все источники
                    </v-btn>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in renderActiveTabTable"
                  :key="item.name"
                >
                  <td class="text-left d-flex align-center">
                    <img :src="item.icon" alt="" class="tool-icon">
                    {{ item.tool }}
                  </td>
                  <td class="text-left">{{ item.desc }}</td>
                  <td class="text-right d-flex align-center">
                    <span style="margin: 0 0 0 auto;">
                      <span>
                        акция
                      </span>
                      {{ item.crypto }}
                      <img :src="item.country.image" alt="" class="country-image">
                    </span>
                  </td>
                </tr>
              </tbody>
          </template>
        </v-simple-table>

      </v-tab-item>

    </v-tabs>
</template>

<script>
    export default {
        name: 'v-tool-table',

        props: {
            tabs: Array,
            renderActiveTabTable: Array,
            value: String
        },        
    }
</script>

<style lang="scss" scoped>
  .tool-icon{
    width: 15px;
    margin: 0 3px 0 0;
  }
  .country-image{
    width: 16px;
    margin: 0 0 0 3px;
  }

  .table{
    ::-webkit-scrollbar {
      width: 5px;
    }
  
    ::-webkit-scrollbar-track {
      background: #F2F2F2;
      border-radius: 10px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: #9C9C9C;
      border-radius: 10px;
    }
  
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

</style>