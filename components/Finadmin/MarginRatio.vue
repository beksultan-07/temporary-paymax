<template>
    <div class="wrap">
        <h4 class="title">
            Коэффициент Маржи
        </h4>

        <ul class="list">
            <li class="item">
                <span class="option">
                    Коэффициент маржи
                </span>
                <span class="option" :class="isred ? 'red' : 'green'">
                    {{marginRatio}}%
                </span>
            </li>

            <li class="item">
                <span class="option">
                    Поддерживающая маржа
                </span>
                <span class="option">
                    {{maintenanceMargin}}%
                </span>
            </li>

            <li class="item">
                <span class="option">
                    Баланс маржи
                </span>
                <span class="option">
                    {{marginBalance}}%
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'v-margin-ratio',

        props: {
            marginRatio: Number,
            isred: Boolean,
            maintenanceMargin: Number,
            marginBalance: Number
        }
    }
</script>

<style lang="scss" scoped>
    .wrap{
        background: #FFFFFF;
        border-radius: 4px;
        width: 395px;
        padding: 10px 20px;
        
        .title{
            margin: 0 0 30px;
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #252525;
        }

        .list{
            padding: 0;
            list-style: none;
            .item{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin: 0 0 10px;

                &:last-child{
                    margin: 0;
                }

                .option{
                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #252525;
                }

                .green{
                    color: #4AD2AA !important;
                    background: none !important;
                }
                .red{
                color: #F4293E !important; 
                background: none !important;

                }
            }
        }
    }

</style>