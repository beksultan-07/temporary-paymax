<template>
    <button class="btn" @click="btnHandler">
        <div class="btn__top">
            <svg class="btn__icon" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99963 4.25007L0.817383 1.06782L1.87863 0.00732422L3.99963 2.12907L6.12063 0.00732422L7.18188 1.06782L3.99963 4.25007Z" fill="#252525"/>
            </svg>
            <h3 class="btn__title">
                {{tickers}}
            </h3>
        </div>
        <div class="btn__top">
            <svg v-if="isred" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5.29496L5.8035 0.991455L6.5105 1.69846L2.207 6.00196H6V7.00196H0.5V1.50196H1.5V5.29446V5.29496Z" fill="#F4293E"/>
            </svg>
            <svg v-else width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 2.20504L1.1965 6.50855L0.4895 5.80155L4.793 1.49805L1 1.49805L0.999999 0.498045L6.5 0.498045L6.5 5.99804L5.5 5.99804L5.5 2.20555L5.5 2.20504Z" fill="#4AD2AA"/>
            </svg>
            <span class="btn__value" :class=" isred ? 'red' : 'green' ">
                {{value}}
            </span>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'v-ticker-button',
        props: {
            isred: {
                type: Boolean,
                required: true,
            },
            tickers: String,
            value: Number,
        },
        methods: {
            btnHandler(){
                console.log('btn click');
            }    
        },
    }
</script>

<style lang="scss" scoped>
    .btn{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &__top{
            display: flex;
            align-items: center;

        }
        &__icon{
            margin: 0 5px 0 0;
        }
        &__title{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            color: #252525;
        }

        &__value{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 18px;
            margin: 0 0 0 2px;
            &.red{
                color: #F4293E !important; 
                background: none !important;
            }
            
            &.green{
                color: #4AD2AA !important;
                background: none !important;
            }
        }
    }
</style>