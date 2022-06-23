<template>
    <div class="content w-full flex">
        <Sidebar :boards="boards"/>
        <div class="wrapper w-3/4 bg-gray-200 p-8">
            <div class="board flex flex-wrap gap-8">
                <h1 class="w-full w-full text-3xl mb-2">Name board</h1>
                <Board v-for="board in boards" :list="board.boardList.split('#')" :title="board.boardName" :key="board.boardId" :id="board.boardId"/>
            </div>
        </div>
    </div>
</template>

<script>

    import Sidebar from "./Sidebar";
    import Board from "../board/Board";
    import {child, get, getDatabase, ref} from "firebase/database";

    export default {
        name: 'MainContent',
        components: {Board, Sidebar},
        data: function () {
            return {
                boards: []
            }
        },

        mounted() {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'boards')).then((snapshot) => {
                if (snapshot.exists()) {
                    this.boards = snapshot.val()
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
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
