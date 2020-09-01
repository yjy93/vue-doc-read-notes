<template>
    <div id="app">
        <!-- 默认插槽 -->
        <!-- <DefaultSlot0></DefaultSlot0> -->
        <hr>

        <!-- 具名插槽的使用 v-slot 的指令要用在 template 元素上 -->
        <NamedSlot>
            <template v-slot:header>
                <h3>我是header的内容!</h3>
            </template>
            <template v-slot:content>
                <h3>我是content的内容!</h3>
            </template>
            <template v-slot:footer>
                <h3>我是footer的内容!</h3>
            </template>
        </NamedSlot>

        <hr>
        <!-- 作用域插槽 -->

    </div>
</template>

<script>
    import DefaultSlot0 from './DefaultSlot0'
    import NamedSlot from './NamedSlot'

    export default {
        name: 'App',
        components: {
            DefaultSlot0,
            NamedSlot
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
