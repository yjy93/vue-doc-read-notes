<template>
    <div>
        <!-- 默认插槽, 可以接收 该组件元素标签中间的内容-->
        <!-- 如果没有 slot 标签, 组件元素标签中间的任何内容都会被舍弃 -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "DefaultSlot"
    }
</script>

<style scoped>

</style>
