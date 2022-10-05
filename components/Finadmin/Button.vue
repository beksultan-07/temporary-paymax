<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'v-finadmin-button'
    }
</script>

<style lang="scss" scoped>
    .btn{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;

        background: #F48020;

        padding: 10px 0;

        max-width: 335px;
        min-width: 100%;
        width: 100%;


        text-align: center;
    }
</style>