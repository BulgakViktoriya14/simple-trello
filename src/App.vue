<template>
    <div id="app">
        <Header/>
        <MainContent/>
    </div>
</template>

<script>
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
            }
        },
    }
</script>

<style>
</style>
