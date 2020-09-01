<template>
    <div id="app">
        <!-- 默认插槽 -->
        <DefaultSlot0></DefaultSlot0>
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
        <p style="color: deeppink;"> 插槽标签中间访问数据的时候,只能访问到当前插槽所在的作用域实例的数据, </p>
        <p style="color: deeppink;"> 有时候我们想访 问子组件的数据, 这时可以通过给插槽 绑定子组件数据,即可实现. </p>
        <ScopedSlot>
            <h3>插槽标签中间的内容!</h3>
            <!-- 这个slotProp对象 就包含了我们 绑定在 slot 标签上的所有属性值,我们这里是有一个 user -->
            <template v-slot:default="slotProp">
                <h4 style="color: chartreuse;"> 作用域插槽,访问子组件数据: {{slotProp.user.name}}</h4>
                <h4 style="color: chartreuse;"> 作用域插槽,访问子组件数据: {{slotProp.user.msg}}</h4>
            </template>
        </ScopedSlot>
        <hr>
        <h5>我们之前说过, v-slot 指令只能用在 template 元素上, 只有一种情况除外,
            那就是当插槽组件中,只有一个默认插槽时, 我们可以把 v-slot 指令用在组件标签上

        </h5>
        <!--<current-user v-slot:default="slotProps">
            {{ slotProps.user.firstName }}
        </current-user> -->

        <!--<current-user v-slot="slotProps">
            {{ slotProps.user.firstName }}
        </current-user>-->
        <h5 style="color: green;">注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：</h5>
    </div>
</template>

<script>
    import DefaultSlot0 from './DefaultSlot0'
    import NamedSlot from './NamedSlot'
    import ScopedSlot from './ScopedSlot'

    export default {
        name: 'App',
        components: {
            DefaultSlot0,
            NamedSlot,
            ScopedSlot
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
