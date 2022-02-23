<template>
    <div class="board__item flex flex-col bg-white shadow-lg p-4 rounded-lg">
        <h3 class="text-xl mb-4 text-gray-500">Name board item</h3>
        <BoardList/>
        <BoardInput/>
    </div>
</template>

<script>
    import BoardInput from "./BoardInput";
    import BoardList from "./BoardList";

    export default {
        name: "Board",
        components: {BoardList, BoardInput}
    }
</script>

<style scoped>

</style>
