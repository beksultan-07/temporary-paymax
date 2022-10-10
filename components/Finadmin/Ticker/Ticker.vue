<template>
    <div class="ticker">
        <div class="content">
            <v-ticker-button 
                :tickers="'ETH-USD'"
                :value="1264.40"
                :isred="true"
                :dialogData='dialogData'
                :dialogDataStocks="dialogDataStocks"
                :dialogDataBonds="dialogDataBonds"
                :dialogDataFutures="dialogDataFutures"
                :dialogDataIndices="dialogDataIndices"
                :countries="countries"
            />

            <v-ticker-item
                title="Change in 24h"
                value="-74.10 -5.54%"
                color="red"
            />

            <v-ticker-item
                title="Max price 24h"
                value="-74.10 -5.54%"
                color="default"
            />

            <v-ticker-item
                title="Min price 24h"
                value="1,376.20"
                color="default"
            />

            <v-ticker-item
                title="Volume 24h (ETH)"
                value="0"
                color="default"
            />

            <v-ticker-item
                title="Volume 24h(USD)"
                value="0"
                color="default"
            />
        </div>
    </div>
</template>

<script>
    import TickerItemVue from './TickerItem.vue'
    import TickerButton from './TickerButton.vue' 

    export default {
        name: "v-ticker",

        components: {
            "v-ticker-item": TickerItemVue,
            "v-ticker-button": TickerButton
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
        }
    }
</script>

<style lang="scss" scoped>
    .ticker{
        background: #FFFFFF;
        border-radius: 4px;
        padding: 10px;
        
        .content{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>