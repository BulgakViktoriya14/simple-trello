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
    import ButtonDefault from "../elements/ButtonDefault";
    import {eventBus} from '../../main.js';
    import { getDatabase, ref, update } from "firebase/database";

    export default {
        name: "Board",
        components: {ButtonDefault, BoardList, BoardInput},
        props: {
            title: String,
            list: Array,
            id: Number
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
                let array = this.list
                array.push(this.newValue)
                let string = array.join('#')
                console.log('value', this.newValue)
                console.log('string', string)
                console.log(this.id)

                const db = getDatabase();
                update(ref(db, 'boards/board' + this.id), {
                    boardList: string
                });
            }
        },
    }
</script>

<style scoped>

</style>
