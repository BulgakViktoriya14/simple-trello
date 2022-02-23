<template>
    <div id="app">
        <Header/>
        <MainContent/>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import Header from './components/main/Header.vue'
    import MainContent from "./components/main/MainContent";
    import './assets/tailwind.css'

    export default {
        name: 'App',
        components: {
            Header,
            MainContent
        },

        data() {
            return {
                boards: []
            }
        },

        firestore() {
            console.log(firebase.database().ref("/boards"))

            return {
                boards: firebase.database().ref("/boards")
            }
        }
    }
</script>

<style>
</style>
