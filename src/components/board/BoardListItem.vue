<template>
    <li class="list-item cursor-default rounded bg-green-600 p-2 mb-3 text-white font-bold">{{ title }}</li>
</template>

<script>
    export default {
        name: "BoardListItem",
        props: {
            title : String
        }
    }
</script>

<style scoped>

</style>
