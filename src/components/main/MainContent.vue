<template>
    <div class="content w-full flex">
        <Sidebar/>
        <div class="wrapper w-3/4 bg-gray-200 p-8">
            <div class="board flex flex-wrap gap-8">
                <h1 class="w-full w-full text-3xl mb-2">Name board</h1>
                <Board v-for="board in arraysData" :list="board.list" :title="board.name" :key="board.id"/>
            </div>
        </div>
    </div>
</template>

<script>

    import Sidebar from "./Sidebar";
    import Board from "../board/Board";

    export default {
        name: 'MainContent',
        components: {Board, Sidebar},
        data: function () {
            return {
                arraysData: [
                    {
                        id: 1,
                        name: "Board 1",
                        list: ["Item 1", "Item 2", "Item 3"]
                    },
                    {
                        id: 2,
                        name: "Board 2",
                        list: ["Item 1", "Item 2", "Item 3"]
                    },
                    {
                        id: 3,
                        name: "Board 3",
                        list: ["Item 1", "Item 2", "Item 3"]
                    }
                ]
            }
        },
    }
</script>

<style>
    .content {
        min-height: calc(100vh - 3rem);
    }

    .board__item {
        width: calc((100% - 4rem) / 3);
    }

    .list-item {
        box-shadow: 2px 2px 7px #606060;
    }
</style>
