<template>
  <v-card>
    <div class="top">
      
      <v-card-title class="title">
        <v-btn
          v-if="countryPage"
          text
          small
          @click="countryPage = false"
        >
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.328 6.99999L8.278 11.95L6.864 13.364L0.5 6.99999L6.864 0.635986L8.278 2.04999L3.328 6.99999Z" fill="#252525"/>
          </svg>
        </v-btn>
        Privacy Policy
      </v-card-title>
  
        <v-btn
          text
          @click="$emit('closePopup')"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
    </div>

    <v-tool-input v-model='inputValue'/>
  

    <v-container>
        <v-tool-table 
          v-if="!countryPage"
          @countrySwitcher="countryPageSwitcher"
          @changeTab="changeTab" 
          :renderActiveTabTable='renderActiveTabTable'
          :tabs="tabs"
        />

      <v-tools-countries 
        v-else 
        :countriesData="filterCounties"
        @countrySwitcher="countrySwitcher"
      />
    </v-container>
  </v-card>

</template>

<script>
import CountriesVue from './Countries.vue';
import InputVue from './Input.vue';
import Table from './Table.vue';

  export default {
    name: "v-finadmin-tools",

    components: { 
      "v-tool-table":Table ,
      "v-tool-input": InputVue,
      "v-tools-countries": CountriesVue
    },

    data() {
        return {
            activeTab: null,
            country: "all",
            countryPage: false,
            inputValue: null,
            tabs: [
                { name: "Все", link: "all" },
                { name: "Акции", link: "stock" },
                { name: "Облигации", link: "bonds" },
                { name: "Фьючерсы", link: "futures" },
                { name: "Индексы", link: "indices" },
            ],
        };
    },
    props: {
        countries: {
            type: Array,
            required: true
        },
        dialogData: {
            type: Array,
            required: true
        },
        dialogDataStocks: {
            type: Array,
            required: true
        },
        dialogDataBonds: {
            type: Array,
            required: true
        },
        dialogDataFutures: {
            type: Array,
            required: true
        },
        dialogDataIndices: {
            type: Array,
            required: true
        },
    },
    methods: {
      changeTab(activeTab){
        this.activeTab = activeTab
      },
      countryPageSwitcher(){
        this.inputValue = null;
        this.countryPage = !this.countryPage
      },
      countrySwitcher(country){
        console.log('country is '+ country);
        this.country = country;
        this.inputValue = null;
        this.countryPage = false;
      },
      filterDialofData(data, value){
        if(value){
          return data.filter(el => el.tool.toLowerCase() === value.toLowerCase());
        }
        if(this.country !== 'all'){
          return data.filter(el => el.country.name === this.country);
        }
        return data;
      }
    },
    computed: {
        renderActiveTabTable() {
            switch (this.activeTab) {
              case "stock":
                return this.filterDialofData(this.dialogDataStocks, this.inputValue)
              case "bonds":
                return this.filterDialofData(this.dialogDataBonds, this.inputValue)
              case "futures":
                return this.filterDialofData(this.dialogDataFutures, this.inputValue)
              case "indices":
                return this.filterDialofData(this.dialogDataIndices, this.inputValue)
              default:
                return this.filterDialofData(this.dialogData, this.inputValue)
            }
        },
        filterCounties(){
          if(this.inputValue){
            return this.countries.filter(el => el.name.toLowerCase() === this.inputValue.toLowerCase());
          }
          return this.countries;
        }
    },
}
</script>

<style lang="scss" scoped>
  .title{
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px !important;
    line-height: 18px;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  }
  .table{
    margin: 20px 0 0;
  }


</style>