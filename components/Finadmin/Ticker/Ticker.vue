<template>
    <div class="ticker">
        <div class="content">
            <v-ticker-button 
                :tickers="'ETH-USD'"
                :value="1264.40"
                :isRed="true"
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
                title="CVolume 24h (ETH)"
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
    }
</script>

<style lang="scss" scoped>
    .ticker{
        width: 810px;
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