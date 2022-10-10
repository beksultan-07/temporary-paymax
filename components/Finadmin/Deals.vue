<template>
    <v-side-block class="wrap">
        <h3 class="title">
            Сделки
        </h3>

        <ul class="table">
            <li class="table-row-header">
                <p class="table-col-name">Цена(USDT)</p>
                <p class="table-col-name">Размер(ETH)</p>
                <p class="table-col-name">Сумма(ETH)</p>
            </li>
        </ul>

        <ul class="table scroll">
            <v-side-block-item 
                v-for="(el, idx) in orderBookData" 
                :key="Date.now() + idx"
                :isred="el.isred" 
                :price="el.price"
                :amount="el.amount"
                :total="el.total"
            />
        </ul>
    </v-side-block>
</template>

<script>
    import SideBlockVue from './SideBlock.vue';
    import SideBlockItemVue from './SideBlockItem.vue';

    export default {
        name: "v-fin-deals",
        components: {
            "v-side-block": SideBlockVue,
            "v-side-block-item": SideBlockItemVue
        },
        props: {
            orderBookData: Array
        }
    }
</script>

<style lang="scss" scoped>

    .wrap{
        display: flex;
        flex-direction: column;
        height: 270px;
    }

    .title{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 700;
        font-size: 14px !important;
        line-height: 18px;
        color: #252525;
        padding: 10px 0 0;
    }
    .table{
        list-style: none;
        padding: 0;

        &.scroll{
            max-height: 100%;
            overflow-y: scroll;
        }

        list-style: none;

        &-row{
            &-header{
                margin: 10px 0 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        &-col{
            &-name{
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 18px;
                color: #252525;
                margin: 0;
            }
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