<template>
    <div class="ticker__item">
        <h3 class="ticker__item__title">
            {{title}}
        </h3>

        <span class="ticker__item__value" :class="color">
            {{value}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'v-ticker-item',

        props: {
            color: {
                type: 'red' | 'green' | 'default',
                required: true
            },
            title: String,
            value: String
        }
    }
</script>

<style lang="scss" scoped>
    .ticker{
        &__item{
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            &__title{
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #252525;
            }

            &__value{
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 18px;
                color: #9C9C9C;
                
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
    }
</style>