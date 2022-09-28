<template>
    <div class="header">
        <svg v-if="isRed" class="icon" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00033 6.06002L7.73833 0.322021L8.68099 1.26469L2.94299 7.00269L8.00033 7.00269V8.33602L0.666992 8.33602L0.666992 1.00269H2.00033L2.00033 6.05936V6.06002Z" fill="#F4293E"/>
        </svg>

        <svg v-else class="icon" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99967 2.43998L1.26167 8.17798L0.319008 7.23531L6.05701 1.49731L0.999674 1.49731L0.999674 0.163978L8.33301 0.163978L8.33301 7.49731L6.99967 7.49731L6.99967 2.44064L6.99967 2.43998Z" fill="#4AD2AA"/>
        </svg>

        <span class="value" :class="isRed ? 'red' : 'green' ">
            {{value}}
        </span>

        <span class="mark-price">
            = ${{markPrice}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "v-contract-price",

        props: {
            isRed: {
                type: Boolean,
                requared: true
            },
            value: {
                type: Number,
                requared: true
            }, 
            markPrice: {
                type: Number,
                requared: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        padding: 0 0 10px;
        display: flex;
        align-items: center;

        .icon{
            margin: 0 5px 0 0;
        }

        .value{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            margin: 0 5px 0 0;
        }

        .green{
            color: #4AD2AA !important;
            background: none !important;
        }

        .red {
            color: #F4293E !important; 
            background: none !important;
        }

        .mark-price{
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #9C9C9C;
        }
    }
</style>