<template>
    <div class="board__item flex flex-col bg-white shadow-lg p-4 rounded-lg">
        <h3 class="text-xl mb-4 text-gray-500">{{title}}</h3>
        <BoardList :listItems="list"/>
        <div class="flex mt-auto">
            <BoardInput/>
            <ButtonDefault :functionOnClick="addItemInBoard" text="+"/>
        </div>
    </div>
</template>

<script>
    import BoardInput from "./BoardInput";
    import BoardList from "./BoardList";
    import ButtonDefault from "../main/ButtonDefault";
    import {eventBus} from '../../main.js';

    export default {
        name: "Board",
        components: {ButtonDefault, BoardList, BoardInput},
        props: {
            title: String,
            list: Array
        },

        data: function() {
            return {
                newValue: '',
            }
        },

        created() {
            eventBus.$on('inputItemForList', data => {
                this.newValue = data.value
            })
        },

        methods: {
            addItemInBoard: function () {
                this.list.push(this.newValue);
            }
        },
    }
</script>

<style scoped>

</style>
