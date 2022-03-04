<template>
    <aside class="sidebar w-1/4 p-6">
        <ButtonDefault class="mb-8 w-full" text="Add board"/>
        <ul class="font-medium text-2xl">
            <li v-for="board in boards" class="mb-8" :key="board">{{board}}</li>
        </ul>
    </aside>
</template>

<script>
    import ButtonDefault from "./ButtonDefault";

    export default {
        name: "Sidebar",
        components: {ButtonDefault},
        data: function () {
            return {
                boards: ["Board 1", "Board 2"]
            }
        }
    }
</script>

<style scoped>

</style>
