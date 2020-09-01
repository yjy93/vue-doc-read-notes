<template>
    <div>
        <h1> 具名插槽 </h1>
        <h2>注意: v-slot 指令只能用在 slot标签上,只有一种情况除外!</h2>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>

    export default {
        name: "NamedSlot"
    }
</script>

<style scoped>

</style>
