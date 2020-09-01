<template>
    <div>
        <h1 style="color: deepskyblue">作用域插槽</h1>
        <!-- 绑定在 slot 标签上的属性, 我们称为 插槽 prop,在父作用域中,我们可以使用带值的 v-slot来定义我们提供的插槽prop的名字 -->
        <slot v-bind:user="user"></slot>
    </div>
</template>

<script>
    export default {
        name: "ScopedSlot",
        data() {
            return {
                user: {
                    name: 'Gene',
                    msg: '我是插槽子组件的数据!'
                }
            }
        }
    }
</script>

<style scoped>

</style>
