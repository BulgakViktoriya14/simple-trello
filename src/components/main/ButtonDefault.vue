<template>
    <button class="button bg-white rounded-lg border-2 border-green-600 p-2 text-green-600 font-bold" v-on:click="functionOnClick">{{text}}</button>
</template>

<script>
    export default {
        name: "ButtonDefault",
        props: {
            text : String,
            functionOnClick: Function,
        }
    }
</script>

<style scoped>

</style>
