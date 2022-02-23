<template>
    <ul class="board__list mb-4" >
        <BoardListItem v-for="item in arrayListBoard" :title="item" :key="item"/>
    </ul>
</template>

<script>
    import BoardListItem from "./BoardListItem";

    export default {
        name: "BoardList",
        components: {BoardListItem},
        data :function() {
            return {
                arrayListBoard: ["item 1", "item 2", "item 3", "item 4", "item 5",]
            }
        }
    }
</script>

<style scoped>

</style>
