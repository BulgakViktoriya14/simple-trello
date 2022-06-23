<template>
    <aside class="sidebar w-1/4 p-6">
        <ButtonDefault class="mb-8 w-full" text="Add board" :functionOnClick="addBoard"/>
        <ul class="font-medium text-2xl">
            <li v-for="board in boards" class="mb-8" :key="board.boardName">{{board.boardName}}</li>
        </ul>
    </aside>
</template>

<script>
    import ButtonDefault from "../elements/ButtonDefault";

    export default {
        name: "Sidebar",
        components: {ButtonDefault},
        props: {
            boards: Array,
        },
        data: function () {
            return {

            }
        },

        methods: {
            addBoard: function() {

            }
        }
    }
</script>

<style scoped>

</style>
