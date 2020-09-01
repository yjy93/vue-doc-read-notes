<template>
    <div id="app">
        <DefaultSlot0></DefaultSlot0>
    </div>
</template>

<script>
    import DefaultSlot0 from './DefaultSlot0'
    export default {
        name: 'App',
        components: {
            DefaultSlot0
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
