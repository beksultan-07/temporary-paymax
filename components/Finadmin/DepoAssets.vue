<template>
    <v-side-block>
        <div class="header">
            <h3 class="title">
                Активы
            </h3>

            <button class="btn" @click.stop="depoAssetsSwitcher = !depoAssetsSwitcher">
                {{activeDepoAssets}}

                <svg class="icon" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99866 4.75007L0.816406 1.56782L1.87766 0.507324L3.99866 2.62907L6.11966 0.507324L7.18091 1.56782L3.99866 4.75007Z" fill="#252525"/>
                </svg>

                <div class="drop-down" :class="{
                    'active': depoAssetsSwitcher
                }">
                    <button 
                        v-for="(el, idx) in depoAssetsDropDown"
                        :key="Date.now() + idx"
                        class="drop-down-item"
                        :class="el === activeDepoAssets ? 'active-depo-asset' : '' " 
                        @click="activeDepoAssets = el"
                    > 
                        {{el}}
                    </button>
                </div>
            </button>
        </div>

        <ul class="table">
            <li class="table-item">
                <p class="table-item-text item-title first-col">
                    Счет
                </p>

                <p class="table-item-text item-title" style="text-align: end;">
                    Инструмент
                </p>

                <p class="table-item-text item-title" style="text-align: end;">
                    Обьем
                </p>
            </li>

            <li 
                class="table-item" 
                v-for="(el, index) in depoAssets" 
                :key="index"    
            >
                <p class="table-item-text first-col">
                    {{el.check}}
                </p>
                <p class="table-item-text" style="text-align: end;">
                    {{el.tool}}
                </p>
                <p class="table-item-text" style="text-align: end;">
                    {{el.volume}}
                </p>
            </li>

        </ul>
    </v-side-block>
</template>

<script>
import SideBlockVue from './SideBlock.vue';

    export default {
        name: 'v-depo-assets',

        components: {
            'v-side-block': SideBlockVue
        },

        data() {
            return {
                depoAssetsDropDown: ['Депозитарий ДС', 'Депозитарий ЦБ'],
                activeDepoAssets: 'Депозитарий ДС',
                depoAssetsSwitcher: false 
            }
        },

        props: {
            depoAssets: {
                type: Array,
                required: true
            }
        },

        methods: {
            sortDepoAssets() {
                return this.depoAssetsDropDown.filter(el => el !== this.activeDepoAssets)
            },
        },

        mounted() {
          document.addEventListener('click', () => this.depoAssetsSwitcher = false)
        },
    }
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 700;
            font-size: 14px !important;
            line-height: 18px;
            color: #252525;
        }

        .btn{
            outline: none;
            position: relative;
            padding: 0 8px;
            border: none;
            margin: 0 0 0 auto;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #252525;

            display: flex;
            align-items: center;

            .icon{
                margin: 0 0 0 5px;
            }

            .drop-down{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                transition: .3s;
                visibility: hidden;
                opacity: 0;
                
                &.active{
                    top: 100%;
                    visibility: visible;
                    opacity: 1;
                }
                &-item{
                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    padding: 10px 0;
                    color: #252525;
                    background: #F9F9F9;
                    transition: .3s;
                    
                    width: 100%;
                    &.active-depo-asset{background: #DCDCDC;}

                    &:hover{
                        background: #DCDCDC;
                    }
                }
                }
        }
    }
    .table{
        padding: 0;
        list-style: none;

        &-item{
            /* display: flex;
            justify-content: space-between;
            flex: 1; */

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;

            margin: 0 0 8px;

            &:last-child {margin: 0;}

            &:first-child {margin: 0;}

            
            &-text{
                text-align: end;
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #9C9C9C;
                margin: 0;

                &.first-col{ 
                    text-align: start !important;
                }
                &.item-title{
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #252525;
                    margin: 10px 0 20px;
                }
            }
        }
    }
</style>