<template>
    <input type="text" v-on:input="inputItemInList" placeholder="input board item h-full" class="w-full p-2 outline-none border-b shadow-lg border-gray-300 focus:shadow-gray-400">
</template>

<script>
    import {eventBus} from '../../main.js';

    export default {
        name: "BoardInput",

        methods: {
            inputItemInList: function (e) {
                eventBus.$emit('inputItemForList', {
                    value: e.target.value
                })
            }
        }
    }
</script>

<style scoped>

</style>
