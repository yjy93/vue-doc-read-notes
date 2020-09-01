<template>
    <div>
        <h1>默认插槽</h1>
        <h2>当前App组件数据: -> {{user.name}}</h2>
        <default-slot1>
            默认插槽
            <br>
            <h3>编译作用域: --> {{user.name}} </h3>
            <p>该插槽跟这个模板的其他地方一样, 可以访问共同实例的 property 和 data</p>
            <p>但是不能访问 default-slot 内部的作用域, </p>
            <p>也就是说插槽标签中间的内容是可以访问当前实例的数据的...</p>
        </default-slot1>
        <hr>
        <DefaultSlot2></DefaultSlot2>
    </div>
</template>

<script>
    import DefaultSlot1 from './DefaultSlot1'
    import DefaultSlot2 from './DefaultSlot2'

    export default {
        name: "DefaultSlot0",
        components: {
            DefaultSlot1,
            DefaultSlot2,
        },
        data() {
            return {
                user: {
                    name: 'Gene',
                }
            }
        },
    }
</script>

<style scoped>

</style>
