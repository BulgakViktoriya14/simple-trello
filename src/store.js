import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            boards: []
        }
    },

    mutations: {
        setBoards(state, boards) {
            state.boards = boards
        },
    },
})
