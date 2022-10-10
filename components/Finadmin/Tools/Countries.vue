<template>
    <ul class="list">
        <li
            v-for="(item, idx) in countriesData" 
            :key="idx"
        >   
            <v-btn
                elevation="0"
                small
                class="dflex align-center btn"
                @click="$emit('countrySwitcher', item.name)"
            >
                <img :src="item.image" alt="" class="icon">
                <span class="item-name">{{ item.name }}</span>
            </v-btn>
            
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'v-tools-countries',
        
        props: {
            countriesData: Array
        },
    }
</script>

<style lang="scss" scoped>
    .list{
        height: 280px;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;
        padding: 0;
        text-align: start;
        .btn{
            margin: 0 0 15px;
        }
        .icon{
            margin: 0 3px 0 0;
        }
        .item-name{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
        }
    }
    ::-webkit-scrollbar {
        width: 5px;
      }
  
      /* Track */
      ::-webkit-scrollbar-track {
        background: #F2F2F2;
        border-radius: 10px;
      }
  
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #9C9C9C;
        border-radius: 10px;
      }
  
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
</style>