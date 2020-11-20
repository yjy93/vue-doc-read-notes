<template>
  <div id="app">
    <h4 style="color: #b61d70"> 自定义指令 </h4>
    <input v-focus type="text">
    <br>
    <input v-focus1 type="text">
  </div>
</template>

<script>

export default {
  name: 'App',
  directives: { // 局部自定义指令, 可以在 directives 选项里定义.
    focus1: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>
