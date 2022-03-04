<template>
    <ul class="board__list mb-4" >
        <BoardListItem v-for="item in listItems" :title="item" :key="item"/>
    </ul>
</template>

<script>
    import BoardListItem from "./BoardListItem";

    export default {
        name: "BoardList",
        components: {BoardListItem},
        props: {
            listItems : Array
        },

        data :function() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
