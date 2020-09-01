<template>
    <div>
        <h3>后备内容/插槽的默认值</h3>
        <p>通常情况, 如果我们不给子组件标签中间传任何内容, 那么插槽内就不会有内容,但是我们可以在插槽中间写内容来给默认值</p>
        <slot>
            <button style="color:red;">插槽默认值</button>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "DefaultSlot2"
    }
</script>

<style scoped>

</style>
