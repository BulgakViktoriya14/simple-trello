<template>
  <div class="content w-full flex">
   <Sidebar/>
    <div class="wrapper w-3/4 bg-gray-200 p-8">
      <div class="board flex flex-wrap gap-8">
        <h1 class="w-full w-full text-3xl mb-2">Name board</h1>
        <Board/>
        <Board/>
        <Board/>
        <Board/>
        <Board/>
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
}
</script>

<style>
  .content {
    min-height: calc(100vh - 3rem);
  }

  .board__item {
    width: calc((100% - 4rem)/3);
  }

  .list-item {
    box-shadow: 2px 2px 7px #606060;
  }
</style>
